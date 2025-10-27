"use client";
import { CustomButton } from "../share/CustomButton";
import { Text } from "../share/Text";
export const Navbar = () => {
  const handleRegister = () => {
    console.log("register");
  };
  const handleLogin = () => {
    console.log("login");
  };

  return (
    <nav className="flex flex-1 justify-end p-10 right-0 gap-4 bg-gray-500 w-full">
      <CustomButton variant="link">
        <Text varient="Button">Register</Text>
      </CustomButton>
      <CustomButton>
        <Text varient="Button">Login</Text>
      </CustomButton>
    </nav>
  );
};
