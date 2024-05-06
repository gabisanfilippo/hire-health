import { ApiHireHealth } from "@/services/HireHealth";
import { Candidate } from "@/types/hireHealth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostCandidate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["POST_CANDIDATE"],
    mutationFn: (body: Candidate) => ApiHireHealth.postCandidate(body),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["GET_CANDIDATES"],
        exact: true,
      }),
  });
};
