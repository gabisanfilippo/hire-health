import { Candidate } from "./hireHealth";

export interface IFieldsList {
  name: keyof Candidate;
  label: string;
  type: HTMLInputTypeAttribute | "select";
  mask?: (value: string) => string;
}
