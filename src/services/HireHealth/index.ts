import { Candidate, IHireHealthApiClass } from "@/types/hireHealth";
import { RegisterInputs } from "@/types/registerForm";
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
    body: RegisterInputs
  ): Promise<AxiosResponse<Candidate, any>> {
    const response = this.api.post(`candidates`, body);
    return response;
  }
}

export const ApiHireHealth = new HireHealthApiClass();
