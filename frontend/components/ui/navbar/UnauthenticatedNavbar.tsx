"use client";
import { CustomButton } from "@/components/share/CustomButton";
import { Text } from "@/components/share/Text";
import { redirect } from "next/navigation";
import useAppStore from "@/store/zustand/useAppStore";
import useAuthStore from "@/store/zustand/useAuthStore";
import { useEffect } from "react";
import useUserStore from "@/store/zustand/useUserStore";

export const UnauthenticatedNavbar = () => {
  const { token, autoSignIn } = useAuthStore();
  const { loading, setLoading } = useAppStore();
  const { setUpUser } = useUserStore();

  const redirectToRegister = () => {
    redirect("/register");
  };
  const handleLogin = () => {
    redirect("/login");
  };

  return (
    <div className="flex flex-1 justify-end gap-4 w-full">
      <CustomButton onClick={redirectToRegister} variant="link">
        <Text varient="Button">Register</Text>
      </CustomButton>
      <CustomButton onClick={handleLogin}>
        <Text varient="Button">Login</Text>
      </CustomButton>
    </div>
  );
};
