import { Input as NextInput } from "@nextui-org/input";
import { ReactNode } from "react";
import { FaUser } from "react-icons/fa";

interface InputInterface {
  children: ReactNode;
  label?: string;
  labelPlacement?:
    | "inside"
    | "outside"
    | "outside-left"
    | "outside-right"
    | "top"
    | "bottom";
  variant?: "solid" | "bordered" | "flat" | "faded" | "ghost";
  errorMessage?: string;
  isRequired?: boolean;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
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
  children,
  label,
  labelPlacement = "inside",
  variant = "solid",
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
    <div className={`input-wrapper ${variant} ${className}`}>
      {label && labelPlacement === "inside" && (
        <label className="text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {startIcon && <span className="icon-start">{getIcon()}</span>}
        <NextInput
          type={type}
          placeholder={placeholder}
          isRequired={isRequired}
          pattern={pattern}
          minLength={minLength}
          maxLength={maxLength}
          isDisabled={isDisabled}
          className={` px-3 py-2 text-sm border ${variant === "bordered" ? "border-gray-300" : "border-transparent"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
        />
        {endIcon && <span className="icon-end">{getIcon()}</span>}
      </div>
      {errorMessage && (
        <p className="mt-1 text-xs text-destructive">{errorMessage}</p>
      )}
      {children}
    </div>
  );
}

export default Input;
