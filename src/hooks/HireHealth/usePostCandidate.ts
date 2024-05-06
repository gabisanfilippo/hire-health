import { ApiHireHealth } from "@/services/HireHealth";
import { RegisterInputs } from "@/types/registerForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostCandidate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["POST_CANDIDATE"],
    mutationFn: (body: RegisterInputs) => ApiHireHealth.postCandidate(body),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["GET_CANDIDATES"],
        exact: true,
      }),
  });
};
