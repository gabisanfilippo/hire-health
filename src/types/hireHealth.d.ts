export type Candidate = {
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
  status?: "active" | "inactive";
};

export interface IHireHealthApiClass {
  getCandidates: () => Promise<AxiosResponse<Candidate[], any>>;
  postCandidate: (body: Candidate) => Promise<AxiosResponse<Candidate, any>>;
  putCandidate: (body: Candidate) => Promise<AxiosResponse<Candidate, any>>;
  deleteCandidate: (cpf: string) => Promise<AxiosResponse<Candidate[], any>>;
}
