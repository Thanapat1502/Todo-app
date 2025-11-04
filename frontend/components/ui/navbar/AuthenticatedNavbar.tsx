"use client";
import { CustomButton } from "@/components/share/CustomButton";
import { Text } from "@/components/share/Text";
import { redirect } from "next/navigation";
import useAppStore from "@/store/zustand/useAppStore";
import useAuthStore from "@/store/zustand/useAuthStore";
import useUserStore from "@/store/zustand/useUserStore";

export const AuthenticatedNavbar = () => {
  const { signOut } = useAuthStore();
  const { user, removeUser } = useUserStore();
  const { loading, setLoading } = useAppStore();

  const handleLogout = () => {
    signOut();
    removeUser();
    redirect("/");
  };

  return (
    <div className="flex flex-1 justify-between w-full">
      <Text varient="Title">{`Hi! ${user?.username}`}</Text>
      <CustomButton onClick={handleLogout}>
        <Text varient="Button">Logout</Text>
      </CustomButton>
    </div>
  );
};
