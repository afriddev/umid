import { Input } from "@nextui-org/input";
import { ReactNode, useState } from "react";
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

function NextInput({
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
  const [clicked, setInputClicked] = useState<boolean>(false);

  function getIcon(): ReactNode {
    if (icon) {
      return <GetIcon icon={icon} />;
    }
  }

  return (
    <div
      onClick={() => {
        setInputClicked(true);
      }}
      onBlur={() => {
        setInputClicked(false);
      }}
      className="relative flex items-center"
    >
      {icon && (
        <div
          className={`absolute  ${startIcon ? "pl-2 left-0" : endIcon ? "pr-2 right-0" : ""} `}
        >
          {getIcon()}
        </div>
      )}

      <Input
        errorMessage={errorMessage}
        variant={variant}
        name={name}
        label={label}
        type={type}
        placeholder={clicked ? placeholder : ""}
        isRequired={isRequired}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        isDisabled={isDisabled}
        labelPlacement={labelPlacement}
        isClearable={isClearable}
        className={`   h-11  ${className} `}
        classNames={{
          input: ` ${icon && "pl-4"} ${inputClassName} text-xs`,
          label: ` ${icon && "pl-4"} ${labelClassName} `,
        }}
      />
    </div>
  );
}

export default NextInput;
