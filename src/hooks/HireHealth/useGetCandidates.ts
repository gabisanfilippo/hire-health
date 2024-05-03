import { ApiHireHealth } from "@/services/HireHealth";
import { useQuery } from "@tanstack/react-query";

export const useGetCandidates = () => {
  return useQuery({
    queryKey: ["GET_CANDIDATES"],
    queryFn: () => ApiHireHealth.getCandidates(),
  });
};
