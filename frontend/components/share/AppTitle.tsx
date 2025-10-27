import { Text } from "./Text";

export const AppTitle = (props: { className?: string }) => {
  return (
    <div
      className={`flex-1 border-2 border-black p-10 text-center rounded-4xl ${props.className}`}>
      <Text varient="Title">Todo!</Text>
    </div>
  );
};
