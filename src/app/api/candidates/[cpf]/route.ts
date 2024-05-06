import { mockCandidates } from "../../mock";

export async function DELETE(
  request: Request,
  { params }: { params: { cpf: string } }
) {
  const cpf = params.cpf;
  const index = mockCandidates.findIndex((element) => element.cpf === cpf);
  mockCandidates.splice(index, 1);

  return Response.json(mockCandidates);
}
