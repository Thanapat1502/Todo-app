"use client";
import { Text } from "@/components/share/Text";
import { MainLayout } from "@/components/common/MainLayout";
import CustomInput from "@/components/share/CustomInput";
import { CustomButton } from "@/components/share/CustomButton";
import { ClientRegisterForm } from "@/components/ui/register/ClientRegisterForm";

type FormValues = {
  email: string;
  displayName: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  return (
    <MainLayout className="flex flex-col items-center justify-center gap-7">
      <Text>Register Here!</Text>
      <ClientRegisterForm />
    </MainLayout>
  );
}
