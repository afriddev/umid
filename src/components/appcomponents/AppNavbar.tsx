import { LuUser } from "react-icons/lu";
import GetIcon from "./GetIcon";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";
import { useAppContext } from "./AppContext";

function AppNavbar() {
  const { openSidebar, dispatch } = useAppContext();

  function handleMenuClick() {
    dispatch({
      type: "setOpenSidebar",
      payload: "",
    });
  }

  return (
    <div className=" text-background  w-full h-full  pl-6 flex justify-between items-center">
      <div className="flex items-center gap-10  ">
        <div
          onClick={handleMenuClick}
          className="z-[990] cursor-pointer hover:bg-background/5 text-background-700  w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center"
        >
          {<GetIcon icon={openSidebar ? "x" : "menu"} />}
        </div>
      </div>

      <div className="   flex  h-full items-center">
        <div className="px-6 ">
          <div className="w-10 h-10  rounded-full cursor-pointer   border border-foreground-200 hover:bg-foreground-200    flex items-center justify-center relative">
            <div className="absolute bg-destructive w-5 h-5  rounded-full  text-background  flex items-center justify-center -top-1 -right-1 text-xs">
              10
            </div>
            <GetIcon icon="bell" />
          </div>
        </div>

        <Popover placement="bottom">
          <PopoverTrigger>
            <div className="flex border-l w-fit  px-6 cursor-pointer hover:bg-foreground/10  h-full  items-center gap-2">
              <div className="w-10 h-10 border rounded-full cursor-pointer     border-foreground-200 flex items-center justify-center ">
                <LuUser className="w-5 h-5" />
              </div>
              <label className="hidden lg:flex">Shaik Afrid</label>
            </div>
          </PopoverTrigger>
          <PopoverContent className=" lg:w-[10vw] w-[35vw] rounded-sm flex flex-col gap-4 py-2  px-0 ">
            <div className="border-b w-full text-center pb-1">Edit profile</div>
            <div className="border-b w-full text-center pb-1">
              Change password
            </div>
            <div className="w-full text-center text-destructive font-semibold ">
              Logout
            </div>
          </PopoverContent>
        </Popover>

        <div className="border-l  cursor-pointer hover:bg-foreground/10 h-full flex px-6 items-center justify-center ">
          <GetIcon icon="settings" className="w-5 h-5 animate-spin" />
        </div>
      </div>
    </div>
  );
}

export default AppNavbar;
