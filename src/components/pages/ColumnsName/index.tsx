export const ColumnsName = () => {
  return (
    <div className="p-4 grid-cols-10 items-center gap-4 text-gray-400 font-semibold text-sm border-b-2 border-gray-400 hidden lg:grid ">
      <p className="col-span-3">Nome</p>
      <p className="col-span-2 text-center">Especialidade</p>
      <p className="col-span-2 text-center">Cidade/Região</p>
      <p className="text-center">Status</p>
      <p className="col-span-2 text-center">Ações</p>
    </div>
  );
};
