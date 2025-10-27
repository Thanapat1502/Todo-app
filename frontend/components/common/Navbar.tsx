"use client";
import { CustomButton } from "../share/CustomButton";
import { Text } from "../share/Text";
import { redirect } from "next/navigation";

export const Navbar = () => {
  const redirectToRegister = () => {
    redirect("/register");
  };
  const handleLogin = () => {
    redirect("/login");
  };

  return (
    <nav className="flex flex-1 justify-end p-10 right-0 gap-4 bg-gray-500 w-full">
      <CustomButton onClick={redirectToRegister} variant="link">
        <Text varient="Button">Register</Text>
      </CustomButton>
      <CustomButton onClick={handleLogin}>
        <Text varient="Button">Login</Text>
      </CustomButton>
    </nav>
  );
};
