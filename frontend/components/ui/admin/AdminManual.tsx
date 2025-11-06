import { Text } from "../../share/Text";
import { TextFrame } from "../../share/TextFrame";

export const AdminManual = () => {
  return (
    <div className="flex flex-col gap-7">
      <TextFrame containerClassName="w-full">
        <div>
          <div className="w-full text-center mb-4">
            <Text varient="Header2">How to use Admin dashboard</Text>
          </div>
          <ol className="flex flex-col gap-4">
            <li>
              <Text varient="Subtitle">{`1.You can access all user data by All User tab.`}</Text>
            </li>
            <li>
              <Text varient="Subtitle">{`2.You can access user's task list by click on table, if you want to go back to All User table just click on "All User" button on top of the table.`}</Text>
            </li>
            <li>
              <Text varient="Subtitle">{`3.You can access all task data by All Task tab.`}</Text>
            </li>
            <li>
              <Text varient="Subtitle">{`4.You can access Todo app main page by "Go To App" menu. Admin can use this app too!`}</Text>
            </li>
            <li>
              <Text varient="Subtitle">{`5.You can logout by "Logout" tab on bottom of sidebar.`}</Text>
            </li>
          </ol>
        </div>
      </TextFrame>
    </div>
  );
};
