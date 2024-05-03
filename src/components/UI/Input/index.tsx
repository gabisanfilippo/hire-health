import { RegisterInputs } from "../../pages/FormRegister/schema";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type IProps = {
  register?: UseFormRegisterReturn<keyof RegisterInputs>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
  errorMessage?: string;
  name: string;
  label?: string;
  className?: string;
  mask?: (value: string) => string;
};

export const Input = ({
  onChange,
  register,
  type,
  errorMessage,
  name,
  label,
  className,
  mask,
}: IProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    let formattedValue = value;

    if (mask) {
      formattedValue = mask(value);
    }

    if (onChange) {
      onChange({
        ...event,
        target: { ...event.target, value: formattedValue },
      });
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <label
        htmlFor={name}
        className={`${
          errorMessage ? "text-custom-pink" : "text-custom-blue"
        } text-sm font-semibold`}
      >
        {label}
      </label>
      <input
        name={name}
        type={type}
        className={`border-2 ${
          errorMessage ? "border-custom-pink" : "border-gray-400"
        } rounded-lg px-4 py-2 bg-white focus:border-custom-blue outline-none`}
        {...register}
        onChange={handleChange}
      />
      <span className="min-h-6 text-custom-pink font-semibold">
        {errorMessage}
      </span>
    </div>
  );
};
