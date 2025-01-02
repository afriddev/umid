import { Input } from "@nextui-org/input";
import { ReactNode, useState } from "react";
import GetIcon from "../appcomponents/GetIcon";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

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
  onchange?: (e: any) => void;
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

  onchange,
}: InputInterface) {
  const [clicked, setInputClicked] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
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
        type={isPassword && !showPassword ? "password" : "text"}
        placeholder={clicked ? placeholder : ""}
        isRequired={isRequired}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        isDisabled={isDisabled}
        onChange={onchange}
        labelPlacement={labelPlacement}
        isClearable={isClearable}
        className={`   h-11  ${className} `}
        classNames={{
          input: ` ${icon && "pl-4"} ${inputClassName} text-xs`,
          label: ` ${icon && "pl-4"} ${labelClassName} `,
        }}
        endContent={
          isPassword ? (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-gray-600"
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </button>
          ) : null
        }
      />
    </div>
  );
}

export default NextInput;
