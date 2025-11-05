import { AppTitle } from "@/components/share/AppTitle";
import { AppBodyUi } from "@/components/ui/home/AppBodyUi";
import { MainLayout } from "@/components/common/MainLayout";
import { CustomFrame } from "@/components/common/CustomFrame";

export default function Home() {
  return (
    <MainLayout>
      <CustomFrame className="flex flex-col gap-7">
        <AppTitle className="w-full" />
        {/* <UnauthenticatedManul /> */}
        <AppBodyUi />
        {/* <AppBodyUi /> */}
      </CustomFrame>
    </MainLayout>
  );
}
