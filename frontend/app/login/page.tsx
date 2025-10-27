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
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
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
        <Text>Login Here!</Text>
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

        <CustomButton type="submit" disabled={isSubmitting}>
          Login
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
