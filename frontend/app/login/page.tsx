import { Text } from "@/components/share/Text";
import { MainLayout } from "@/components/common/MainLayout";
import { ClientLoginForm } from "@/components/ui/login/ClientLoginForm";

export default function Login() {
  return (
    <MainLayout className="flex flex-col items-center justify-center gap-7">
      <div>
        <Text>Login Here!</Text>
      </div>

      <ClientLoginForm />
    </MainLayout>
  );
}
// ...existing code...
