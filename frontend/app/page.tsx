import Image from "next/image";
import { AppTitle } from "@/components/share/AppTitle";
import { UnauthenticatedManul } from "@/components/ui/home/UnauthenticatedManul";
import { AuthenticatedApp } from "@/components/ui/home/AuthenticatedApp";
import { AppBodyUi } from "@/components/ui/home/AppBodyUi";
import { MainLayout } from "@/components/common/MainLayout";
import { CustomFrame } from "@/components/common/CustomFrame";
// import useAppStore from "@/store/zustand/useAppStore";
// import useAuthStore from "@/store/zustand/useAuthStore";
// import useUserStore from "@/store/zustand/useUserStore";

export default function Home() {
  return (
    <MainLayout>
      <CustomFrame className="flex flex-col gap-7">
        <AppTitle className="w-full" />
        {/* <UnauthenticatedManul /> */}
        <AuthenticatedApp />
        {/* <AppBodyUi /> */}
      </CustomFrame>
    </MainLayout>
  );
}
