import { HTMLInputTypeAttribute } from "react";
import { RegisterInputs } from "./schema";

export interface IFieldsList {
  name: keyof RegisterInputs;
  label: string;
  type: HTMLInputTypeAttribute | "select";
}

export const fieldsList: IFieldsList[] = [
  {
    name: "photo",
    label: "Foto",
    type: "file",
  },
  {
    name: "name",
    label: "Nome",
    type: "text",
  },
  {
    name: "birth",
    label: "Data de nascimento",
    type: "date",
  },
  {
    name: "cpf",
    label: "CPF",
    type: "text",
  },
  {
    name: "rg",
    label: "RG",
    type: "text",
  },

  {
    name: "email",
    label: "E-mail",
    type: "text",
  },
  {
    name: "phone",
    label: "Telefone",
    type: "text",
  },
  {
    name: "zipCode",
    label: "CEP",
    type: "text",
  },
  {
    name: "addressNumber",
    label: "Número",
    type: "text",
  },
  {
    name: "addressComplement",
    label: "Complemento",
    type: "text",
  },
  {
    name: "address",
    label: "Endereço",
    type: "text",
  },

  {
    name: "specialty",
    label: "Especialidade",
    type: "text",
  },
  {
    name: "specialtyRegistration",
    label: "Registro de especialidade",
    type: "text",
  },
  {
    name: "serviceOption",
    label: "Opção de atendimento",
    type: "select",
  },
  {
    name: "consultationValue",
    label: "Valor da consulta (R$/h)",
    type: "number",
  },
  {
    name: "serviceRegion",
    label: "Região de atendimento",
    type: "text",
  },
];
