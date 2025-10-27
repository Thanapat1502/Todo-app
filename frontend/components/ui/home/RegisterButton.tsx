"use client";
import { CustomButton } from "@/components/share/CustomButton";
import { Text } from "@/components/share/Text";
import { redirect } from "next/navigation";

export const RegisterButton = () => {
  const redirectToRegister = () => {
    redirect("/register");
  };
  return (
    <CustomButton
      onClick={redirectToRegister}
      size="lg"
      className="rounded-full w-full h-14">
      <Text varient="Button">Register Here!</Text>
    </CustomButton>
  );
};
