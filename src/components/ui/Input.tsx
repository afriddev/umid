import { Input as NextInput } from "@nextui-org/input";
import { ReactNode } from "react";
import { FaUser } from "react-icons/fa";

interface InputInterface {
  label?: string;
  labelPlacement?: "inside" | "outside" | "outside-left";
  variant?: "bordered" | "flat" | "faded";
  errorMessage?: string;
  isRequired?: boolean;
  type?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  isDisabled?: boolean;
  className?: string;
  placeholder?: string;
  endIcon?: boolean;
  startIcon?: boolean;
  icon?: string;
}

function Input({
  label,
  labelPlacement = "inside",
  variant = "bordered",
  errorMessage,
  isRequired = false,
  type = "text",
  pattern,
  minLength,
  maxLength,
  placeholder,
  isDisabled = false,
  className,
  endIcon = true,
  startIcon = false,
  icon,
}: InputInterface) {
  function getIcon(): ReactNode {
    switch (icon) {
      case "user":
        return <FaUser />;
    }
  }
  return (
    <NextInput
      errorMessage={errorMessage}
      variant={variant}
      label={label}
      type={type}
      placeholder={placeholder}
      isRequired={isRequired}
      pattern={pattern}
      minLength={minLength}
      maxLength={maxLength}
      isDisabled={isDisabled}
      labelPlacement={labelPlacement}
      startContent={startIcon ? getIcon() : false}
      endContent={endIcon && !startIcon ? getIcon() : false}
      className={` ${className}`}
    />
  );
}

export default Input;
