import { IconTrash, IconEdit, IconProfile } from "@/assets/icons";
import { Modal } from "@/components/UI/Modal";
import { Candidate } from "@/types/hireHealth";
import { useState } from "react";
import { FormRegister } from "../FormRegister";

interface IProps {
  data: Candidate;
}

export const CardCandidate = ({ data }: IProps) => {
  const [modalIsOpen, setModalIsOpen] = useState({
    edit: false,
    delete: false,
  });

  let defaultValues: any = {
    ...data,
    consultationValue: "R$ " + data.consultationValue,
  };

  return (
    <>
      <li className="bg-white drop-shadow p-4 sm:pl-8 border-none rounded-md grid lg:grid-cols-10 md:grid-cols-12 grid-cols-10 items-center md:gap-4 gap-2 lg:gap-y-0">
        <div className="flex items-center gap-2 lg:col-span-3 order-1 md:col-span-10 col-span-8 h-full">
          <span className="rounded-full object-cover w-10 h-10 border-gray-400 border-2 flex items-center justify-center">
            <IconProfile size={30} />
          </span>
          <p>{data.name}</p>
        </div>
        <p className="lg:col-span-2 lg:text-center text-start lg:order-2 order-4 md:col-span-5 col-span-8">
          <span className="lg:hidden text-custom-blue font-semibold">
            Especialidade:{" "}
          </span>
          {data.specialty}
        </p>
        <p className="lg:col-span-2 lg:text-center text-start lg:order-3 md:order-5 order-6 md:col-span-5 col-span-8">
          <span className="lg:hidden text-custom-blue font-semibold">
            Cidade/Região:{" "}
          </span>
          {data.serviceOption}
        </p>
        <p
          className={`py-2 px-4 ${
            data.status === "active" ? "bg-green-400" : "bg-red-400"
          } rounded-lg text-white font-semibold m-auto lg:order-4 md:order-6 order-5 col-span-2 lg:col-span-1 row-span-2 w-24 text-center`}
        >
          {data.status === "active" ? "Ativo" : "Inativo"}
        </p>
        <span
          className="cursor-pointer w-max m-auto mr-0 hover:scale-110 transition-all lg:order-5 order-2"
          onClick={() => setModalIsOpen((prev) => ({ ...prev, edit: true }))}
        >
          <IconEdit />
        </span>
        <span
          className="cursor-pointer w-max m-auto ml-0 fill-red-600 hover:scale-110 transition-all lg:order-6 order-3"
          onClick={() => setModalIsOpen((prev) => ({ ...prev, delete: true }))}
        >
          <IconTrash />
        </span>
      </li>

      {modalIsOpen.edit && (
        <Modal
          onClose={() => setModalIsOpen((prev) => ({ ...prev, edit: false }))}
          title="Editar candidato"
          content={<FormRegister defaultValues={defaultValues} />}
        />
      )}
    </>
  );
};
