// act as UI main frame, add custom width/hight to ui
export const CustomFrame = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { children, className } = props;
  return (
    <div className={`flex flex-col gap-7 lg:w-1/3 ${className}`}>
      {children}
    </div>
  );
};
