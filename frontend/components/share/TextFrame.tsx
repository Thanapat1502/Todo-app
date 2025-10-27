import { Text } from "./Text";

type TextFrameProps = {
  children: React.ReactNode;
  containerClassName?: string;
};
export const TextFrame = (props: TextFrameProps) => {
  const { children, containerClassName } = props;
  return (
    <div
      className={`flex-1 border-2 border-black p-10 rounded-4xl ${containerClassName}`}>
      {children}
    </div>
  );
};
