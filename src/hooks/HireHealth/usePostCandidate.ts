import { ApiHireHealth } from "@/services/HireHealth";
import { RegisterInputs } from "@/types/registerForm";
import { useMutation } from "@tanstack/react-query";

export const usePostCandidate = () => {
  return useMutation({
    mutationKey: ["POST_CANDIDATE"],
    mutationFn: (body: RegisterInputs) => ApiHireHealth.postCandidate(body),
  });
};
