import * as Yup from "yup";

export type RegisterInputs = {
  photo: File;
  name: string;
  birth: string;
  cpf: string;
  rg: string;
  email?: string;
  phone?: string;
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

const stringMinRequiredSchema = Yup.string()
  .required("*Este campo é obrigatório")
  .min(3, "*Mínimo 3 caracteres");

const stringRequiredSchema = Yup.string().required("*Este campo é obrigatório");

const cpfSchema = Yup.string()
  .required("*Este campo é obrigatório")
  .test("is-valid-cpf", "*CPF inválido", (value) => {
    if (!value) return false;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(value);
  });

const emailSchema = Yup.string().when(["phone"], {
  is: (phone: any) => !phone,
  then: (schema) =>
    schema
      .required("*E-mail ou telefone é obrigatório")
      .email("*E-mail inválido"),
});

const phoneSchema = Yup.string().when(["email"], {
  is: (email: any) => !email,
  then: (schema) =>
    schema
      .required("*E-mail ou telefone é obrigatório")
      .test("is-valid-phone", "*Telefone inválido", (value) => {
        const phoneRegex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
        return phoneRegex.test(value);
      }),
});

const zipCodeSchema = Yup.string()
  .required("*Este campo é obrigatório")
  .test("is-valid-cep", "*CEP inválido", (value) => {
    const cepRegex = /^\d{5}-\d{3}$/;
    return cepRegex.test(value);
  });

const consultationValueSchema = Yup.string()
  .required("*Este campo é obrigatório")
  .matches(/[0-9]/, "*Valor inválido");

const photoSchema = Yup.mixed<File>()
  .required("*Este campo é obrigatório")
  .test("is-image", "*Por favor, selecione um arquivo de imagem", (value) => {
    if (value) {
      const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
      const fileExtension = value?.name?.split(".")?.pop()?.toLowerCase();
      return allowedExtensions.includes(fileExtension ?? "");
    }
    return false;
  });

export const RegisterSchema = Yup.object().shape(
  {
    photo: photoSchema,
    name: stringMinRequiredSchema,
    birth: stringRequiredSchema,
    cpf: cpfSchema,
    rg: stringRequiredSchema,
    email: emailSchema,
    phone: phoneSchema,
    zipCode: zipCodeSchema,
    address: stringMinRequiredSchema,
    addressNumber: stringRequiredSchema,
    addressComplement: Yup.string(),
    specialty: stringMinRequiredSchema,
    specialtyRegistration: stringMinRequiredSchema,
    serviceOption: stringRequiredSchema,
    serviceRegion: stringMinRequiredSchema,
    consultationValue: consultationValueSchema,
  },
  [["email", "phone"]]
);
