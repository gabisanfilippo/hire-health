import { AddressViaCep, IViaCepApiClass } from "@/types/viaCep";
import axios, { AxiosInstance, AxiosResponse } from "axios";

class ViaCepApiClass implements IViaCepApiClass {
  private api: AxiosInstance;
  constructor() {
    this.api = axios.create({ baseURL: "https://viacep.com.br/ws/" });
  }

  public async getAddressByCep(
    cep: string
  ): Promise<AxiosResponse<AddressViaCep>> {
    const cepOnlyNumbers = cep.replace("-", "");
    const address = this.api.get(`${cepOnlyNumbers}/json`);
    return address;
  }
}

export const ApiViaCep = new ViaCepApiClass();
