import { ApiHireHealth } from "@/services/HireHealth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCandidate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["DELETE_CANDIDATE"],
    mutationFn: (cpf: string) => ApiHireHealth.deleteCandidate(cpf),
    onSuccess: () =>
      setTimeout(
        () =>
          queryClient.resetQueries({
            queryKey: ["GET_CANDIDATES"],
            exact: true,
          }),
        1500
      ),
  });
};
