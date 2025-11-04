"use client";
import { useEffect, useState } from "react";
import CustomInput from "@/components/share/CustomInput";
import { CustomButton } from "@/components/share/CustomButton";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import useUserStore from "@/store/zustand/useUserStore";
import useAuthStore from "@/store/zustand/useAuthStore";

import { TestButton } from "@/components/share/TestButton";
import { Text } from "@/components/share/Text";

type FormValues = {
  email: string;
  displayName: string;
  password: string;
  confirmPassword: string;
};

export const ClientRegisterForm = () => {
  //   const [registerError, setRegisterError] = useState("");
  const { setUpUser } = useUserStore();
  const {
    registerUser,
    registerError,
    clearRegisterError,
    registerSuccess,
    clearRegisterSuccess,
  } = useAuthStore();
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

  const onSubmit = async (data: FormValues) => {
    //Clear remaining error
    clearRegisterSuccess();
    clearRegisterError();
    //Send req to auth store
    const userData = {
      email: data.email,
      username: data.displayName,
      password: data.password,
    };

    const result = await registerUser(userData);
    if (result && result.token) {
      setUpUser();
    }
  };

  const onCancle = () => {
    clearRegisterError();
    clearRegisterSuccess();
    reset();
    redirect("/");
  };

  useEffect(() => {
    //Clear remaining register message
    clearRegisterError();
    clearRegisterSuccess();
  }, []);

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

        {registerError && (
          <Text className="text-center" color="danger">
            {registerError}
          </Text>
        )}
        {registerSuccess && (
          <Text className="text-center" color="success">
            {registerSuccess}
          </Text>
        )}

        <CustomButton type="submit" disabled={isSubmitting}>
          Register
        </CustomButton>
        <CustomButton
          type="button"
          variant="link"
          className="text-red-500"
          onClick={onCancle}>
          Cancle
        </CustomButton>
      </form>
    </>
  );
};
