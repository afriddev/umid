import { ReactNode } from "react";
import GetIcon from "../appcomponents/GetIcon";

interface AppDialogInterface {
  children: ReactNode;
  center?: boolean;
  right?: boolean;
}

function AppDialog({
  children,
  center = true,
  right = false,
}: AppDialogInterface) {
  return (
    <div
      className={`fixed flex items-center justify-center  backdrop-blur-xl   w-[100vw]  h-[100vh] bg-foreground/50 inset-0 z-[999]  `}
    >
      <div
        className={` ${center ? "  flex w-fit h-fit flex-col bg-background rounded-lg   min-h-[25vh] min-w-[25vw]" : ""}`}
      >
        <div className="rounded-t-lg p-2 flex gap-4 items-center justify-between w-full bg-foreground/10 text-foreground ">
          <label className="font-semibold text-lg">Create Student</label>
          <div className=" p-1  rounded-full cursor-pointer hover:bg-foreground/10">
          <GetIcon icon="x"  />
          </div>
        </div>
        <div className="p-2">
        {children}
        </div>
      </div>
    </div>
  );
}

export default AppDialog;
