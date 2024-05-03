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

export interface IFieldsList {
  name: keyof RegisterInputs;
  label: string;
  type: HTMLInputTypeAttribute | "select";
  mask?: (value: string) => string;
}
