"use client";

import { Button } from "@/components/UI/Button";
import { CardCandidate } from "@/components/pages/CardCandidate";
import { ColumnsName } from "@/components/pages/ColumnsName";
import { useGetCandidates } from "@/hooks/HireHealth/useGetCandidates";
import Link from "next/link";

export default function Home() {
  const { data } = useGetCandidates();

  return (
    <main className="px-8 w-full flex flex-col gap-4">
      <section className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl">Lista de candidatos</h2>
        <Button content={<Link href={"/register"}>Cadastrar</Link>} />
      </section>
      <ColumnsName />
      <ul className="flex flex-col gap-1">
        {data?.data?.map((candidate) => {
          return <CardCandidate key={candidate?.cpf} data={candidate} />;
        })}
      </ul>
    </main>
  );
}
