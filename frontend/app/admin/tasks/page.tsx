import { AppTitle } from "@/components/share/AppTitle";
import { MainLayout } from "@/components/common/MainLayout";
import { CustomFrame } from "@/components/common/CustomFrame";

export default function AllItemsPage() {
  return (
    <MainLayout>
      <CustomFrame className="flex flex-col gap-7">
        <AppTitle title="All Items Page" className="w-full" />
        {/* <AppBodyUi /> */}
      </CustomFrame>
    </MainLayout>
  );
}
