import { RegisterInputs } from "./registerForm";

export type Candidate = {
  status: "active" | "inactive";
} & RegisterInputs;

export interface IHireHealthApiClass {
  getCandidates: () => Promise<AxiosResponse<Candidate[], any>>;
}
