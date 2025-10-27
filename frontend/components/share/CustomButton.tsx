import { Button } from "../base/button";
import type { ShadcnButtonProps } from "../base/button";

export const CustomButton = ({
  className,
  variant = "default",
  size,
  children,
  ...props
}: ShadcnButtonProps) => {
  const defaultClassname =
    "bg-teal-500 border border-white hover:bg-teal-600 hover:border-gray-100";
  return (
    <Button
      variant={variant}
      size={size}
      className={`${variant === "default" && defaultClassname} ${className}`}>
      {children}
    </Button>
  );
};
