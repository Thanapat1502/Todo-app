import { AppTitle } from "@/components/share/AppTitle";
import { MainLayout } from "@/components/common/MainLayout";
import { CustomFrame } from "@/components/common/CustomFrame";

export default function AllItemOfThisUserPage({ params }) {
  const { userId } = params;

  return (
    <MainLayout>
      <CustomFrame className="flex flex-col gap-7">
        <AppTitle title={`All Item of ${userId}`} className="w-full" />
        {/* <AppBodyUi /> */}
      </CustomFrame>
    </MainLayout>
  );
}
