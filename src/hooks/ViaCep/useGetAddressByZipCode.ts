import { ApiViaCep } from "@/services/ViaCep";
import { useQuery } from "@tanstack/react-query";

export const useGetAddressByZipCode = (cep: string) => {
  return useQuery({
    queryKey: ["GET_ADDRESS_BY_CEP", cep],
    queryFn: () => (cep ? ApiViaCep.getAddressByCep(cep) : undefined),
  });
};
