import { GifLoading } from "@/assets/gifs";
import { HTMLAttributes, ReactNode } from "react";

interface IProps {
  content: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset";
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export const Button = ({
  content,
  onClick,
  type,
  className,
  isDisabled = false,
  isLoading = false,
}: IProps) => {
  return (
    <button
      className={`bg-custom-pink px-4 py-2 rounded-lg text-white font-medium transition-all flex items-center justify-center gap-2  ${
        isLoading || isDisabled
          ? "opacity-50 hover:opacity-50"
          : "opacity-100 hover:opacity-100"
      } ${className}`}
      onClick={onClick}
      type={type || "button"}
      disabled={isDisabled || isLoading}
    >
      {isLoading && <GifLoading />}
      {content}
    </button>
  );
};
