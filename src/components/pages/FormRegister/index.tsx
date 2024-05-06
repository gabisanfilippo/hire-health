"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../UI/Input";
import { RegisterSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { fieldsList } from "./data";
import { HTMLInputTypeAttribute, useEffect, useMemo } from "react";
import { Button } from "../../UI/Button";
import { UploadPhoto } from "../../UI/UploadPhoto";
import { Select } from "../../UI/Select";
import { IFieldsList, RegisterInputs } from "@/types/registerForm";
import { useGetAddressByZipCode } from "@/hooks/ViaCep/useGetAddressByZipCode";
import { usePostCandidate } from "@/hooks/HireHealth/usePostCandidate";
import { IconSuccess } from "@/assets/icons";
import { useRouter } from "next/navigation";

const INPUT_TYPE: HTMLInputTypeAttribute[] = ["date", "text", "number"];
const SERVICE_OPTIONS = [
  { label: "Selecione", value: "" },
  { label: "Online", value: "online" },
  { label: "Presencial", value: "presencial" },
];
const GRID_CLASS_NAMES: Record<keyof RegisterInputs, string> = {
  address: "col-span-4",
  addressComplement: "md:col-span-2 col-span-4",
  addressNumber: "md:col-span-1 col-span-2",
  birth: "md:col-span-2 col-span-4",
  consultationValue: "md:col-span-1 col-span-2",
  cpf: "md:col-span-2 col-span-4",
  email: "md:col-span-2 col-span-4",
  name: "md:col-span-2 col-span-4",
  phone: "md:col-span-2 col-span-4",
  photo: "row-span-2 lg:col-span-2 col-span-4",
  rg: "md:col-span-2 col-span-4",
  serviceOption: "md:col-span-1 col-span-2",
  serviceRegion: "md:col-span-2 col-span-4",
  specialty: "md:col-span-2 col-span-4",
  specialtyRegistration: "md:col-span-2 col-span-4",
  zipCode: "md:col-span-1 col-span-2",
};

export const FormRegister = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterInputs>({ resolver: yupResolver(RegisterSchema) });

  const watchZipCode = watch("zipCode");

  const zipCode = useMemo(() => {
    const zipCodeRegex = /^\d{5}-\d{3}$/;

    if (zipCodeRegex.test(watchZipCode)) return watchZipCode;
    else return "";
  }, [watchZipCode]);

  const { data: addressData } = useGetAddressByZipCode(zipCode);
  const {
    mutateAsync: postCandidate,
    isPending,
    isSuccess,
  } = usePostCandidate();

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => postCandidate(data);

  const commomProps = (field: IFieldsList) => ({
    name: field.name,
    label: field.label,
    register: { ...register(field.name) },
    type: field.type,
    errorMessage: errors[field.name]?.message?.toString(),
    className: GRID_CLASS_NAMES[field.name],
    mask: field.mask,
  });

  useEffect(() => {
    const response = addressData?.data;
    if (response?.logradouro) {
      setValue(
        "address",
        `${response.logradouro}, ${response.bairro} - ${response.localidade}/${response.uf}`
      );
    }
  }, [addressData]);

  useEffect(() => {
    isSuccess && setTimeout(() => router.push("/"), 2000);
  }, [isSuccess]);

  if (isSuccess)
    return (
      <section className="flex items-center justify-center flex-col p-8 mt-8">
        <IconSuccess />
        <p className="text-center mt-8 font-semibold text-lg">
          Cadastro realizado com sucesso!
        </p>
        <p className="text-center">
          Você será redirecionado em alguns instantes.
        </p>
      </section>
    );

  return (
    <form
      className="grid grid-cols-4 gap-4 gap-y-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      {fieldsList.map((field) => {
        if (field.type === "file") {
          return (
            <UploadPhoto
              key={"field" + field.name}
              {...commomProps(field)}
              onChange={(file) => setValue(field.name, file[0])}
            />
          );
        }
        if (field.type === "select") {
          return (
            <Select
              key={"field" + field.name}
              {...commomProps(field)}
              options={SERVICE_OPTIONS}
            />
          );
        }
        if (INPUT_TYPE.includes(field.type)) {
          return (
            <Input
              key={"field" + field.name}
              {...commomProps(field)}
              onChange={(event) => setValue(field.name, event.target.value)}
            />
          );
        }
      })}

      <Button
        type="submit"
        content={"Enviar"}
        className={"col-span-4 w-max m-auto px-8 text-lg mt-4"}
        isLoading={isPending}
      />
    </form>
  );
};
