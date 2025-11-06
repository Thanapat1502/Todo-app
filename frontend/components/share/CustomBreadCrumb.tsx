import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/base/breadcrumb";
export type CustomBreadcrumbProps = {
  currentPageTitle?: string;
  prePageTitle?: string;
  backUrl?: string;
};

export const CustomBreadcrumd = (props: CustomBreadcrumbProps) => {
  const { currentPageTitle = "", prePageTitle = "Back", backUrl = "/" } = props;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={`${backUrl}`}>{prePageTitle}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>{currentPageTitle}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
