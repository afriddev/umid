import { Input } from "@heroui/input";
import { ReactNode, useState, forwardRef, useEffect } from "react";
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
  value?:string
}

const NextInput = forwardRef<HTMLInputElement, InputInterface>(
  (
    {
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
      value
    },
    ref
  ) => {
    const [clicked, setInputClicked] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    const [isInvalid, setIsInValid] = useState<boolean>(false);

    useEffect(() => {
      if ((errorMessage as any)?.length > 0) {
        setIsInValid(true);
      } else {
        setIsInValid(false);
      }
    }, [errorMessage]);

    function getIcon(): ReactNode {
      return icon ? <GetIcon icon={icon} /> : null;
    }

    return (
      <div
        onClick={() => setInputClicked(true)}
        onBlur={() => setInputClicked(false)}
        className="relative flex  w-full flex-col"
      >
        <div>
          <div>
            {icon && (
              <div
                className={`absolute top-4 ${
                  startIcon ? "pl-2 left-0" : endIcon ? "pr-2 right-0" : ""
                }`}
              >
                {getIcon()}
              </div>
            )}

            <Input
              ref={ref} // Pass the ref to the Input component
              autoComplete="off"
              aria-labelledby={label ?? placeholder}
              color="primary"
              errorMessage={errorMessage}
              variant={variant}
              name={name}
              label={
                <div className="flex items-center ml-1">
                  {label}{" "}
                  {isRequired && (
                    <GetIcon
                      icon="star"
                      className="text-destructive w-1 h-1 ml-1 "
                    />
                  )}
                </div>
              }
              type={isPassword && !showPassword ? "password" : "text"}
              pattern={pattern}
              minLength={minLength}
              maxLength={maxLength}
              isDisabled={isDisabled}
              onChange={onchange}
              labelPlacement={labelPlacement}
              isClearable={isClearable}
              size="md"
              className={className}
              isInvalid={isInvalid}
              value={value}
              classNames={{
                input: `${icon ? "pl-5" : ""} ${inputClassName} text-sm`,
                label: `${icon ? "pl-4" : ""} ${labelClassName} text-nowrap`,
              }}
              fullWidth={true}
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
        </div>
      </div>
    );
  }
);

export default NextInput;
