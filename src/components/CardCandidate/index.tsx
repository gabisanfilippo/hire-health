import { IconTrash, IconEdit } from "@/assets/icons";
import Image from "next/image";

export const CardCandidate = () => {
  return (
    <li className="bg-white drop-shadow p-4 sm:pl-8 border-none rounded-md grid lg:grid-cols-10 md:grid-cols-12 grid-cols-10 items-center md:gap-4 gap-2 lg:gap-y-0">
      <div className="flex items-center gap-2 lg:col-span-3 order-1 md:col-span-10 col-span-8 h-full">
        <Image
          alt=""
          src={
            "data:image/jpeg;base64,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"
          }
          width={40}
          height={40}
          className="rounded-full object-cover w-10 h-10"
        />
        <p>Gabrielle Coelho Sanfilippo</p>
      </div>
      <p className="lg:col-span-2 lg:text-center text-start lg:order-2 order-4 md:col-span-5 col-span-8">
        <span className="lg:hidden text-custom-blue font-semibold">
          Especialidade:{" "}
        </span>
        Cardiologista
      </p>
      <p className="lg:col-span-2 lg:text-center text-start lg:order-3 md:order-5 order-6 md:col-span-5 col-span-8">
        <span className="lg:hidden text-custom-blue font-semibold">
          Cidade/Região:{" "}
        </span>
        São Paulo
      </p>
      <p className="py-2 px-4 bg-green-400 w-max rounded-lg text-white font-semibold m-auto lg:order-4 md:order-6 order-5 col-span-2 lg:col-span-1 row-span-2">
        Ativo
      </p>
      <span className="cursor-pointer w-max m-auto mr-0 hover:scale-110 transition-all lg:order-5 order-2">
        <IconEdit />
      </span>
      <span className="cursor-pointer w-max m-auto ml-0 fill-red-600 hover:scale-110 transition-all lg:order-6 order-3">
        <IconTrash />
      </span>
    </li>
  );
};
