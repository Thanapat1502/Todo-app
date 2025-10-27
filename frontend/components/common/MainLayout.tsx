export const MainLayout = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { children, className } = props;
  return <main className={`px-4 py-4 ${className}`}>{children}</main>;
};
