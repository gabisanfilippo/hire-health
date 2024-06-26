export type AddressViaCep = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

export interface IViaCepApiClass {
  getAddressByCep: (cep: string) => Promise<AxiosResponse<AddressViaCep, any>>;
}
