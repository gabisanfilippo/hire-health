import { IconSuccess } from "@/assets/icons";
import { Button } from "@/components/UI/Button";
import { useDeleteCandidate } from "@/hooks/HireHealth/useDeleteCandidate";

interface IProps {
  onClose: () => void;
  cpf: string;
}

export const DeleteConfirmation = ({ onClose, cpf }: IProps) => {
  const {
    mutateAsync: deleteCandidate,
    isPending,
    isSuccess,
  } = useDeleteCandidate();

  if (isSuccess)
    return (
      <section className="flex items-center justify-center flex-col p-8 mt-8">
        <IconSuccess />
        <p className="text-center mt-8 font-semibold text-lg">
          Candidato excluído.
        </p>
      </section>
    );

  return (
    <>
      <p className="mt-4">Tem certeza que deseja excluir esse candidato?</p>
      <div className="flex gap-4 mt-4">
        <Button
          content={"Cancelar"}
          className="!text-custom-pink flex-1 border-custom-pink border-2 bg-transparent"
          onClick={onClose}
        />
        <Button
          content={"Confirmar"}
          className="flex-1"
          isLoading={isPending}
          onClick={() => deleteCandidate(cpf)}
        />
      </div>
    </>
  );
};
