import Image from "next/image";
import { AppTitle } from "@/components/share/AppTitle";
import { UnauthenticatedManul } from "@/components/share/UnauthenticatedManul";
import { MainLayout } from "@/components/common/MainLayout";
import { CustomButton } from "@/components/share/CustomButton";
import { Text } from "@/components/share/Text";
import { Footer } from "@/components/common/Footer";
export default function Home() {
  const redirectToRegister = () => {
    console.log("To register");
  };
  return (
    // <main className="flex flex-col items-center justify-center gap-7">
    <MainLayout className="flex flex-col items-center justify-center gap-7">
      <AppTitle className="w-full" />
      <UnauthenticatedManul />
      <CustomButton
        onClick={redirectToRegister}
        size="lg"
        className="rounded-full w-full h-14">
        <Text varient="Button">Register Here!</Text>
      </CustomButton>
      <div className="flex justify-center items-center">
        <Text>Already have an account? 👉</Text>
        <CustomButton
          variant="ghost"
          size="lg"
          className="text-teal-500 underline">
          <Text varient="Button">Login</Text>
        </CustomButton>
      </div>
    </MainLayout>
  );
}
