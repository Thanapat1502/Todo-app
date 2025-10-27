"use client";
import { CustomButton } from "@/components/share/CustomButton";
import { Text } from "@/components/share/Text";
import { redirect } from "next/navigation";
export const InlineLoginButton = () => {
  const redirectToLogin = () => {
    redirect("/login");
  };
  return (
    <CustomButton
      onClick={redirectToLogin}
      variant="ghost"
      size="lg"
      className="text-teal-500 underline">
      <Text varient="Button">Login</Text>
    </CustomButton>
  );
};
