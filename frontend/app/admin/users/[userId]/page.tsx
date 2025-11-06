"use client";
import { AppTitle } from "@/components/share/AppTitle";
import { MainLayout } from "@/components/common/MainLayout";
import { CustomFrame } from "@/components/common/CustomFrame";
import { useParams } from "next/navigation";
import { CustomBreadcrumd } from "@/components/share/CustomBreadCrumb";
import { CustomTable } from "@/components/share/CustomTable";
import useAdminStore from "@/store/zustand/useAdminStore";
import { useEffect } from "react";

const columns = [
  { key: "id", label: "ID" },
  { key: "item_name", label: "Task Name" },
  { key: "user_id", label: "Owner Id" },
  { key: "status", label: "Status" },
  { key: "created_at", label: "Created at" },
  { key: "updated_at", label: "Updated at" },
];

export default function AllItemOfThisUserPage() {
  const params = useParams();
  const userIdString = params.userId as string;
  const { userTasks, getUserTasks } = useAdminStore();
  const userId = parseInt(userIdString);

  useEffect(() => {
    if (userId) {
      getUserTasks(userId);
    }
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-col gap-7 w-full">
        <CustomBreadcrumd
          currentPageTitle={`All Item of ${userId}`}
          prePageTitle="All Users"
          backUrl="/admin/users"
        />
        <AppTitle title={`All Item of ${userId}`} className="w-full" />
        <CustomTable columns={columns} data={userTasks} />
        {/* <AppBodyUi /> */}
      </div>
    </MainLayout>
  );
}
