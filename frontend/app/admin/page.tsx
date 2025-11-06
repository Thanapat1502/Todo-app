import { AppTitle } from "@/components/share/AppTitle";
import { MainLayout } from "@/components/common/MainLayout";
import { AdminManual } from "@/components/ui/admin/AdminManual";

export default function AdminDashboard() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-7 w-full">
        <AppTitle title="Welcome Admin" className="w-full" />
        <AdminManual />
      </div>
    </MainLayout>
  );
}
