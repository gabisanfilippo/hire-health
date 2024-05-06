import { mockCandidates } from "../mock";

export async function GET(request: Request) {
  return Response.json(mockCandidates);
}

export async function POST(request: Request) {
  const candidate = await { ...(await request.json()), status: "active" };
  mockCandidates.push(candidate);

  return Response.json(candidate);
}

export async function PUT(request: Request) {
  const candidate = await request.json();
  const index = mockCandidates.findIndex(
    (element) => element.cpf === candidate.cpf
  );

  mockCandidates.splice(index, 1, candidate);
  return Response.json(candidate);
}
