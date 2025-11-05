import { Input } from "../base/input";
import { Label } from "../base/label";
import React, { InputHTMLAttributes } from "react";

export type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  containerClassname?: string;
  inputClassname?: string;
  id: string;
  label?: string;
};
const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, id, containerClassname, inputClassname, ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-1 ${containerClassname ?? ""}`}>
        {label && (
          <label htmlFor={id} className="text-sm font-medium">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          {...props} // ensures name, onChange, onBlur, value, etc. are passed through
          className={`px-3 py-2 border rounded focus:outline-none focus:ring ${
            inputClassname ?? ""
          }`}
        />
      </div>
    );
  }
);
CustomInput.displayName = "CustomInput";

export default CustomInput;
