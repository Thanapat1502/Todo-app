import { Button } from "../base/button";
import type { ShadcnButtonProps } from "../base/button";
import { Spinner } from "../base/spinner";

export type CustomButtonProps = {
  enableLoading?: boolean;
  isLoading?: boolean;
};

export const CustomButton = ({
  className,
  variant = "default",
  size,
  children,
  onClick,
  enableLoading = true,
  isLoading = false,
  ...props
}: ShadcnButtonProps & CustomButtonProps) => {
  const defaultClassname =
    "bg-teal-500 border border-white hover:bg-teal-600 hover:border-gray-100";
  return (
    <Button
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={isLoading}
      className={`${
        variant === "default" && defaultClassname
      } ${className} hover:cursor-pointer`}>
      {enableLoading && isLoading && <Spinner />}
      {children}
    </Button>
  );
};
