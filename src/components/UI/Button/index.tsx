import { HTMLAttributes, ReactNode } from "react";

interface IProps {
  content: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset";
  className?: string;
}

export const Button = ({ content, onClick, type, className }: IProps) => {
  return (
    <button
      className={`bg-custom-pink px-4 py-2 rounded-lg text-white font-medium transition-all ${className}`}
      onClick={onClick}
      type={type || "button"}
    >
      {content}
    </button>
  );
};
