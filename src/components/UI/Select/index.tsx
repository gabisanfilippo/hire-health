import { Candidate } from "@/types/hireHealth";
import { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type IProps = {
  register?: UseFormRegisterReturn<keyof Candidate>;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  errorMessage?: string;
  name: string;
  label?: string;
  className?: string;
  options: { label: string; value: any }[];
};

export const Select = ({
  onChange,
  register,
  errorMessage,
  name,
  label,
  className,
  options,
}: IProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        htmlFor={name}
        className={`text-custom-blue text-sm font-semibold`}
      >
        {label}
      </label>
      <select
        name={name}
        className={`border-2 ${
          errorMessage ? "border-custom-pink" : "border-gray-400"
        } rounded-lg px-4 py-2 bg-white focus:border-custom-blue outline-none`}
        {...register}
        onChange={onChange}
      >
        {options.map((option) => {
          return (
            <option key={option.value + "select"} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      <span className="h-6 text-custom-pink font-semibold">{errorMessage}</span>
    </div>
  );
};
