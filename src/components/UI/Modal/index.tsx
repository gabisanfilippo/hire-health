import { ReactNode } from "react";
import { Button } from "../Button";

interface IProps {
  onClose: () => void;
  title: string;
  content: ReactNode;
  className?: string;
}

export const Modal = ({ onClose, title, content, className }: IProps) => {
  return (
    <span className="fixed z-40 top-0 left-0 w-screen h-screen flex items-center justify-center sm:px-8 px-4 py-8 backdrop-blur-lg">
      <section
        className={`bg-custom-white sm:p-8 p-4 shadow rounded-md flex flex-col gap-4 sm:min-w-96 sm:w-max w-full max-h-full overflow-auto ${className}`}
      >
        <article className="flex items-center justify-between md:gap-8 gap-4">
          <h3 className="font-bold text-2xl">{title}</h3>
          <Button content={"X"} className="font-extrabold" onClick={onClose} />
        </article>
        <article>{content}</article>
      </section>
    </span>
  );
};
