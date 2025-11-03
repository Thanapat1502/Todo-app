import Image from "next/image";
import { AppTitle } from "@/components/share/AppTitle";
import { UnauthenticatedManul } from "@/components/ui/home/UnauthenticatedManul";
import { MainLayout } from "@/components/common/MainLayout";
import { Text } from "@/components/share/Text";
import { RegisterButton } from "@/components/ui/home/RegisterButton";
import { InlineLoginButton } from "@/components/ui/home/InlineLoginButton";
// import useAppStore from "@/store/zustand/useAppStore";
// import useAuthStore from "@/store/zustand/useAuthStore";
// import useUserStore from "@/store/zustand/useUserStore";

export default function Home() {
  return (
    // <main className="flex flex-col items-center justify-center gap-7">
    <MainLayout className="flex flex-col items-center justify-center gap-7">
      <AppTitle className="w-full" />
      <UnauthenticatedManul />
      <RegisterButton />
      <div className="flex justify-center items-center">
        <Text>Already have an account? 👉</Text>
        <InlineLoginButton />
      </div>
    </MainLayout>
  );
}
