import { Candidate, IHireHealthApiClass } from "@/types/hireHealth";
import axios, { AxiosInstance, AxiosResponse } from "axios";

class HireHealthApiClass implements IHireHealthApiClass {
  private api: AxiosInstance;
  constructor() {
    this.api = axios.create({ baseURL: "/api/" });
  }

  public async getCandidates(): Promise<AxiosResponse<Candidate[], any>> {
    const response = this.api.get(`candidates`);
    return response;
  }

  public async postCandidate(
    body: Candidate
  ): Promise<AxiosResponse<Candidate, any>> {
    const response = this.api.post(`candidates`, body);
    return response;
  }

  public async putCandidate(
    body: Candidate
  ): Promise<AxiosResponse<Candidate, any>> {
    const response = this.api.put(`candidates`, body);
    return response;
  }

  public async deleteCandidate(
    cpf: string
  ): Promise<AxiosResponse<Candidate[], any>> {
    const response = this.api.delete(`candidates/${cpf}`);
    return response;
  }
}

export const ApiHireHealth = new HireHealthApiClass();
