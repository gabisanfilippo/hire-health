import { ReactNode } from "react";

interface IProps {
  content: ReactNode;
  onClick?: () => void;
}

export const Button = ({ content, onClick }: IProps) => {
  return (
    <button
      className="bg-custom-pink px-4 py-2 rounded-lg text-white font-medium transition-all"
      onClick={onClick}
    >
      {content}
    </button>
  );
};
