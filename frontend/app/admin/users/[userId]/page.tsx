"use client";
import { AppTitle } from "@/components/share/AppTitle";
import { MainLayout } from "@/components/common/MainLayout";
import { CustomFrame } from "@/components/common/CustomFrame";
import { useParams } from "next/navigation";

export default function AllItemOfThisUserPage() {
  const params = useParams();
  const userId = params.userId;

  return (
    <MainLayout>
      <CustomFrame className="flex flex-col gap-7">
        <AppTitle title={`All Item of ${userId}`} className="w-full" />
        {/* <AppBodyUi /> */}
      </CustomFrame>
    </MainLayout>
  );
}
