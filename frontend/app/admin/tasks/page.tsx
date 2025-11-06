"use client";
import { AppTitle } from "@/components/share/AppTitle";
import { MainLayout } from "@/components/common/MainLayout";
import { CustomFrame } from "@/components/common/CustomFrame";
import { CustomTable } from "@/components/share/CustomTable";
import { useEffect } from "react";
import useAdminStore from "@/store/zustand/useAdminStore";

const columns = [
  { key: "id", label: "ID" },
  { key: "item_name", label: "Task Name" },
  { key: "user_id", label: "Owner Id" },
  { key: "status", label: "Status" },
  { key: "created_at", label: "Created at" },
  { key: "updated_at", label: "Updated at" },
];

export default function AllItemsPage() {
  const { allTasks, getAllTasks } = useAdminStore();

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-col gap-7 w-full">
        <AppTitle title="All Items Page" className="w-full" />
        <CustomTable columns={columns} data={allTasks} />
      </div>
    </MainLayout>
  );
}
