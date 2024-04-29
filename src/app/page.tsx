import { CardCandidate } from "@/components/CardCandidate";
import { ColumnsName } from "@/components/ColumnsName";

export default function Home() {
  return (
    <main className="px-8 w-full flex flex-col gap-4">
      <h2 className="font-semibold text-2xl">Lista de candidatos</h2>
      <ColumnsName />
      <ul className="flex flex-col gap-1">
        <CardCandidate />
        <CardCandidate />
      </ul>
    </main>
  );
}
