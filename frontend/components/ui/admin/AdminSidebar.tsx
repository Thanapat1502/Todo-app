"use client";

import { Home, Users, ListTodo, User, LogOut } from "lucide-react";
import { CustomSidebar } from "@/components/share/CustomSidbar";
import useAuthStore from "@/store/zustand/useAuthStore";
import { redirect } from "next/navigation";

const adminMenu = [
  { label: "Manual", icon: Home, href: "/admin" },
  { label: "All Users", icon: Users, href: "/admin/users" },
  { label: "All Task List", icon: ListTodo, href: "/admin/tasks" },
  // { label: "User Detail", icon: User, href: "/admin/users" },
];

export function AdminSidebar() {
  const { signOut } = useAuthStore();
  const handleSignOut = () => {
    signOut();
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
