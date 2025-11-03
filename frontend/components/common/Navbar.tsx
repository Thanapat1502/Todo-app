"use client";
import { CustomButton } from "../share/CustomButton";
import { Text } from "../share/Text";
import { redirect } from "next/navigation";
import useAppStore from "@/store/zustand/useAppStore";
import useAuthStore from "@/store/zustand/useAuthStore";
import { useEffect } from "react";
import useUserStore from "@/store/zustand/useUserStore";

export const Navbar = () => {
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
    <nav className="flex flex-1 justify-end p-10 right-0 gap-4 bg-gray-500 w-full">
      {loading ? <div>Loading...</div> : null}
      <CustomButton onClick={redirectToRegister} variant="link">
        <Text varient="Button">Register</Text>
      </CustomButton>
      <CustomButton onClick={handleLogin}>
        <Text varient="Button">Login</Text>
      </CustomButton>
    </nav>
  );
};
