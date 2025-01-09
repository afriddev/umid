import { ReactNode, useState, useEffect } from "react";
import GetIcon from "../appcomponents/GetIcon";

interface AppDialogInterface {
  children: ReactNode;
  center?: boolean;
  right?: boolean;
  closeMe: () => void;
}

function AppDialog({
  children,
  center = true,
  right = false,
  closeMe,
}: AppDialogInterface) {
  const [isOpen, setIsOpen] = useState(false);
  const [animateClose, setAnimateClose] = useState(true);

  useEffect(() => {
    setIsOpen(true);
    return () => setIsOpen(false);
  }, []);

  const handleClose = () => {
    setAnimateClose(false);
    setTimeout(() => {
      setIsOpen(false);
      closeMe();
    }, 200);
  };

  let translateClass = "";
  if (center && !right) {
    translateClass = animateClose ? "translate-y-[0vw]" : "translate-y-[40vw]";
  } else if (right) {
    translateClass = animateClose ? "translate-x-0" : "translate-x-full";
  }

  return (
    <div
      className={`fixed flex items-center justify-center backdrop-blur-xl w-[100vw] h-[100vh] bg-foreground/50 inset-0 z-[999] transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`${
          center && !right
            ? "flex w-fit h-fit flex-col bg-background rounded-lg min-h-[25vh] min-w-[25vw]"
            : "fixed right-0 bg-background h-screen min-w-[25vw] w-fit"
        } transition-transform transform ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        } ${translateClass}`}
      >
        <div className="rounded-t-lg p-2 flex gap-4 items-center justify-between w-full bg-foreground/10 text-foreground ">
          <label className="font-semibold text-lg">Create Organisation</label>
          <div
            onClick={handleClose}
            className="p-1 rounded-full cursor-pointer hover:bg-foreground/10"
          >
            <GetIcon icon="x" />
          </div>
        </div>
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
}

export default AppDialog;
