import { Input as NextInput } from "@nextui-org/input";
import { ReactNode } from "react";
import { FaUser } from "react-icons/fa";
import GetIcon from "../appcomponents/GetIcon";

interface InputInterface {
  label?: string;
  labelPlacement?: "inside" | "outside" | "outside-left";
  variant?: "bordered" | "flat" | "faded";
  errorMessage?: string;
  isRequired?: boolean;
  name?: string;
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
  isClearable?: boolean;
  inputClassName?: string;
  labelClassName?: string;
}

function Input({
  label,
  labelPlacement = "inside",
  name,
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
  isClearable = false,
  inputClassName,
  labelClassName,
}: InputInterface) {
  function getIcon(): ReactNode {
    if (icon) {
      return <GetIcon icon={icon} />;
    }
  }
  return (
    <div className="relative flex items-center">
      {icon && (
        <div
          className={`absolute  ${startIcon ? "pl-2 left-0" : endIcon ? "pr-2 right-0" : ""} `}
        >
          {getIcon()}
        </div>
      )}

      <NextInput
        errorMessage={errorMessage}
        variant={variant}
name={name}
        label={label}
        type={type}
        placeholder={placeholder}
        isRequired={isRequired}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        isDisabled={isDisabled}
        labelPlacement={labelPlacement}
        isClearable={isClearable}
        className={`   h-10  ${className} text-background `}
        classNames={{
          input: ` ${icon && "pl-4"} ${inputClassName} `,
          label: ` ${icon && "pl-4"} ${labelClassName}`,
        }}
      />
    </div>
  );
}

export default Input;
