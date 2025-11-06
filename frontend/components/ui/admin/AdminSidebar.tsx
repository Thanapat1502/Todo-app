"use client";

import { Home, Users, ListTodo, UserCircle2, LogOut } from "lucide-react";
import { CustomSidebar } from "@/components/share/CustomSidbar";
import useAuthStore from "@/store/zustand/useAuthStore";
import { redirect } from "next/navigation";
import useUserStore from "@/store/zustand/useUserStore";

const adminMenu = [
  { label: "Manual", icon: Home, href: "/admin" },
  { label: "All Users", icon: Users, href: "/admin/users" },
  { label: "All Task List", icon: ListTodo, href: "/admin/tasks" },
  { label: "Go To App", icon: UserCircle2, href: "/" },
];

export function AdminSidebar() {
  const { signOut } = useAuthStore();
  const { removeUser } = useUserStore();
  const handleSignOut = () => {
    signOut();
    removeUser();
    redirect("/");
  };
  return (
    <CustomSidebar
      title="Admin"
      defaultPath="/admin"
      menus={adminMenu}
      lastMenu={{
        label: "Logout",
        icon: LogOut,
        onClick: () => handleSignOut(),
      }}
    />
  );
}
