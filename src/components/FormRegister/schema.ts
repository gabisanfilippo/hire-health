import * as Yup from "yup";

export type RegisterInputs = {
  photo: File;
  name: string;
  birth: string;
  cpf: string;
  rg: string;
  email: string;
  phone: string;
  zipCode: string;
  address: string;
  addressNumber: string;
  addressComplement?: string;
  specialty: string;
  specialtyRegistration: string;
  serviceOption: string;
  serviceRegion: string;
  consultationValue: string;
};

export const RegisterSchema = Yup.object().shape({
  photo: Yup.mixed<File>().required("*Este campo é obrigatório"),
  name: Yup.string().required("*Este campo é obrigatório"),
  birth: Yup.string().required("*Este campo é obrigatório"),
  cpf: Yup.string().required("*Este campo é obrigatório"),
  rg: Yup.string().required("*Este campo é obrigatório"),
  email: Yup.string().required("*Este campo é obrigatório"),
  phone: Yup.string().required("*Este campo é obrigatório"),
  zipCode: Yup.string().required("*Este campo é obrigatório"),
  address: Yup.string().required("*Este campo é obrigatório"),
  addressNumber: Yup.string().required("*Este campo é obrigatório"),
  addressComplement: Yup.string(),
  specialty: Yup.string().required("*Este campo é obrigatório"),
  specialtyRegistration: Yup.string().required("*Este campo é obrigatório"),
  serviceOption: Yup.string().required("*Este campo é obrigatório"),
  serviceRegion: Yup.string().required("*Este campo é obrigatório"),
  consultationValue: Yup.string().required("*Este campo é obrigatório"),
});
