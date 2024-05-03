import { FormRegister } from "@/components/pages/FormRegister";

export default function Register() {
  return (
    <main className="px-8 w-full flex flex-col gap-4">
      <h2 className="font-semibold text-2xl">
        Cadastrar novo profissional de saúde
      </h2>
      <FormRegister />
    </main>
  );
}
