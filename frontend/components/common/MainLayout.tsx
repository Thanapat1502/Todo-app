//defind main padding and frame
export const MainLayout = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { children, className } = props;
  return (
    <main
      className={`flex flex-col items-center justify-center px-4 py-4 ${className}`}>
      {children}
    </main>
  );
};
