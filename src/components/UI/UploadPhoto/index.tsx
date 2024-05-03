import { UseFormRegisterReturn } from "react-hook-form";
import { RegisterInputs } from "../../pages/FormRegister/schema";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { IconProfile } from "@/assets/icons";

interface IProps {
  errorMessage?: string;
  className?: string;
  name: string;
  label?: string;
  register?: UseFormRegisterReturn<keyof RegisterInputs>;
  onChange: (file: FileList) => void;
}

export const UploadPhoto = ({
  errorMessage,
  className,
  name,
  label,
  register,
  onChange,
}: IProps) => {
  const [file, setFile] = useState<File | undefined>();
  const [imageUrl, setImageUrl] = useState<string | undefined>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      onChange(event?.target?.files!);
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (result && typeof result === "string") {
          setImageUrl(result);
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <section className={`${className}`}>
      <div className="flex gap-4">
        <article
          className={` w-36 h-36 rounded-full aspect-video flex items-center justify-center border-2 ${
            errorMessage ? "border-custom-pink" : "border-gray-400"
          } `}
        >
          {!imageUrl && <IconProfile />}
          {imageUrl && (
            <Image
              width={144}
              height={144}
              alt=""
              src={imageUrl || ""}
              className="rounded-full w-36 h-36 object-cover max-h-full"
            />
          )}
        </article>
        <div className="flex flex-col w-full">
          <p
            className={`${
              errorMessage ? "text-custom-pink" : "text-custom-blue"
            } text-sm font-semibold`}
          >
            {label}
          </p>
          <label
            htmlFor={name}
            className={`border-2 ${
              errorMessage ? "border-custom-pink" : "border-gray-400"
            } rounded-lg px-4 py-2 bg-white focus:border-custom-blue outline-none font-semibold`}
          >
            Escolher arquivo
          </label>
          <input
            type="file"
            name={name}
            id={name}
            className="hidden"
            {...register}
            onChange={handleChange}
          />
          <p className="mt-4">{file?.name}</p>
        </div>
      </div>
      <span className="h-6 text-custom-pink font-semibold">{errorMessage}</span>
    </section>
  );
};
