"use client";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import useAuthStore from "@/store/zustand/useAuthStore";
import useUserStore from "@/store/zustand/useUserStore";
import CustomInput from "@/components/share/CustomInput";
import { CustomButton } from "@/components/share/CustomButton";
import { Text } from "@/components/share/Text";
import { TestButton } from "@/components/share/TestButton";
import useAppStore from "@/store/zustand/useAppStore";

type FormValues = {
  email: string;
  password: string;
};

export const ClientLoginForm = () => {
  const { signIn, signInError, clearSignInError } = useAuthStore();
  const { setUpUser } = useUserStore();
  const { loading, setLoading } = useAppStore();

  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  //   const password = watch("password", "");

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    clearSignInError();
    const result = await signIn(data.email, data.password);
    //   console.log("Login result:", result);
    if (result) {
      console.log("Get profile successfully");
      setUpUser();
      redirect("/");
    }
    setLoading(false);
  };

  const onCancle = () => {
    reset();
    redirect("/");
  };

  return (
    <>
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

        <CustomButton type="submit" disabled={isSubmitting} isLoading={loading}>
          Login
        </CustomButton>
      </form>
      {signInError && <Text color="danger">{signInError}</Text>}

      <CustomButton
        type="button"
        variant="link"
        className="text-red-600"
        onClick={onCancle}>
        Cancle
      </CustomButton>
    </>
  );
};
