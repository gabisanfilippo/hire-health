import { mockCandidates } from "../mock";

export async function GET(request: Request) {
  return Response.json(mockCandidates);
}
