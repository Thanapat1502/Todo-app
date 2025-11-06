"use client";
import useUserStore from "@/store/zustand/useUserStore";
import { AuthenticatedNavbar } from "../ui/navbar/AuthenticatedNavbar";
import { UnauthenticatedNavbar } from "../ui/navbar/UnauthenticatedNavbar";

export const Navbar = () => {
  const { user } = useUserStore();
  return (
    <nav className="flex flex-1 justify-end py-4 px-10 right-0 gap-4 bg-gray-500 w-full">
      {user ? <AuthenticatedNavbar /> : <UnauthenticatedNavbar />}
    </nav>
  );
};
