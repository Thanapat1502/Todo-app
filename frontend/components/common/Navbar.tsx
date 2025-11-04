"use client";
import { CustomButton } from "../share/CustomButton";
import { Text } from "../share/Text";
import { redirect } from "next/navigation";
import useAppStore from "@/store/zustand/useAppStore";
import useAuthStore from "@/store/zustand/useAuthStore";
import { useEffect } from "react";
import useUserStore from "@/store/zustand/useUserStore";
import { AuthenticatedNavbar } from "../ui/navbar/AuthenticatedNavbar";
import { UnauthenticatedNavbar } from "../ui/navbar/UnauthenticatedNavbar";

export const Navbar = () => {
  // const { token, autoSignIn } = useAuthStore();
  const { loading, setLoading } = useAppStore();
  const { user } = useUserStore();

  const redirectToRegister = () => {
    redirect("/register");
  };
  const handleLogin = () => {
    redirect("/login");
  };

  return (
    <nav className="flex flex-1 justify-end py-4 px-10 right-0 gap-4 bg-gray-500 w-full">
      {user ? <AuthenticatedNavbar /> : <UnauthenticatedNavbar />}
    </nav>
  );
};
