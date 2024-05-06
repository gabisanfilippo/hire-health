import { ApiHireHealth } from "@/services/HireHealth";
import { Candidate } from "@/types/hireHealth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePutCandidate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["PUT_CANDIDATE"],
    mutationFn: (body: Candidate) => ApiHireHealth.putCandidate(body),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["GET_CANDIDATES"],
        exact: true,
      }),
  });
};
