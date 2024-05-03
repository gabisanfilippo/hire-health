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
}

export const ApiHireHealth = new HireHealthApiClass();
