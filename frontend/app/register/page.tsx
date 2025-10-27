// ...existing code...
"use client";
import { Text } from "@/components/share/Text";
import { MainLayout } from "@/components/common/MainLayout";
import CustomInput from "@/components/share/CustomInput";
import { CustomButton } from "@/components/share/CustomButton";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";

type FormValues = {
  email: string;
  displayName: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const password = watch("password", "");

  const onSubmit = (data: FormValues) => {
    // For now, just log the data — no server call
    console.log("Register form submitted:", data);
    // Send form data to zustand
    // add loading
    // redirect to login
  };
  const onCancle = () => {
    reset();
    redirect("/");
  };

  return (
    <MainLayout className="flex flex-col items-center justify-center gap-7">
      <div>
        <Text>Register Here!</Text>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm flex flex-col gap-4"
        noValidate>
        <CustomInput
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                // simple email regex
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
          label="Email"
          id="email"
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}

        <CustomInput
          {...register("displayName", {
            required: "displayName is required",
            minLength: { value: 3, message: "Minimum 3 characters" },
          })}
          label="Display name"
          id="displayName"
          type="text"
          placeholder="displayName"
        />
        {errors.displayName && (
          <p className="text-sm text-red-500">{errors.displayName.message}</p>
        )}

        <CustomInput
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum 6 characters" },
          })}
          label="Password"
          id="password"
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}

        <CustomInput
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
          label="Confirm password"
          id="confirmPassword"
          type="password"
          placeholder="Confirm password"
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}

        <CustomButton type="submit" disabled={isSubmitting}>
          Register
        </CustomButton>
      </form>
      <CustomButton
        type="button"
        variant="link"
        className="text-red-600"
        onClick={onCancle}>
        Cancle
      </CustomButton>
    </MainLayout>
  );
}
// ...existing code...
