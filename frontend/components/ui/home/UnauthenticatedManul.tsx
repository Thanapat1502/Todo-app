import { Text } from "../../share/Text";
import { TextFrame } from "../../share/TextFrame";
export const UnauthenticatedManul = () => {
  return (
    <TextFrame containerClassName="w-full">
      <div>
        <div className="w-full text-center mb-4">
          <Text varient="Header2">How to use</Text>
        </div>
        <ol className="flex flex-col gap-2">
          <li>
            <Text>1.Register with email and password</Text>
          </li>
          <li>
            <Text>2.Login</Text>
          </li>
          <li>
            <Text>3.Ready to add your new todo!</Text>
          </li>
        </ol>
      </div>
    </TextFrame>
  );
};
