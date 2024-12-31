import { Button } from "@nextui-org/button";
import { ReactNode } from "react";
import { FaUser } from "react-icons/fa";

interface ButtonInterface {
  children: ReactNode;
  variant?: "solid" | "bordered" | "flat" | "faded" | "ghost";
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  radius?: "sm" | "md" | "lg" | "full";
  fullWidth?: boolean;
  isDisabled?: boolean;
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  onclick?: () => void;
  className?: string;
  endIcon?: boolean;
  startIcon?: boolean;
  icon?: string;
  type?:"submit" | "button"
}

function NextButton({
  children,
  radius = "sm",
  color = "primary",
  isDisabled = false,
  fullWidth = true,
  size = "md",
  isLoading = false,
  onclick,
  variant = "solid",
  className,
  endIcon = true,
  startIcon = false,
  icon,
  type="button"
}: ButtonInterface) {
  function getIcon(): ReactNode {
    switch (icon) {
      case "user":
        return <FaUser />;
    }
  }

  return (
    <Button
    type={type}
      variant={variant}
      radius={radius}
      fullWidth={fullWidth}
      isDisabled={isDisabled}
      color={color}
      size={size}
      isLoading={isLoading}
      className={` w-fit ${className}`}
      onClick={onclick}
      startContent={startIcon ? getIcon() : false}
      endContent={endIcon && !startIcon ? getIcon() : false}
    >
      {children}
    </Button>
  );
}

export default NextButton;
