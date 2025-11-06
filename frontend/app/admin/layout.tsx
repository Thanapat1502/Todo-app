import React from "react";
import { AdminSidebar } from "@/components/ui/admin/AdminSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/base/sidebar";
import { CustomSidebarTrigger } from "@/components/share/CustomSidbar";
type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout(props: AdminLayoutProps) {
  const { children } = props;
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <CustomSidebarTrigger />
        <AdminSidebar />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </SidebarProvider>
  );
}
