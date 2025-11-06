"use client";
import { AppTitle } from "@/components/share/AppTitle";
import { MainLayout } from "@/components/common/MainLayout";
import { CustomTable } from "@/components/share/CustomTable";
import useAdminStore from "@/store/zustand/useAdminStore";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { CustomBreadcrumd } from "@/components/share/CustomBreadCrumb";

const columns = [
  { key: "id", label: "ID" },
  { key: "username", label: "User Name" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
  { key: "createdAt", label: "Created at" },
];

export default function AllUsersPage() {
  const { allUser, getAllUsers } = useAdminStore();

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-col gap-7 w-full">
        <CustomBreadcrumd prePageTitle="All Users" backUrl="/admin/users" />
        <AppTitle title="All User Page" className="w-full" />
        <CustomTable
          columns={columns}
          data={allUser}
          onRowClick={(user) => {
            console.log(user);
            redirect(`/admin/users/${user.id}`);
          }}
        />
      </div>
      {/* <AppBodyUi /> */}
    </MainLayout>
  );
}
