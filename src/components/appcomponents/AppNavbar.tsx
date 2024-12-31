import { LuUser } from "react-icons/lu";
import { HiOutlineMenu } from "react-icons/hi";
import Input from "../ui/Input";
import GetIcon from "./GetIcon";

function AppNavbar() {
  return (
    <div className=" text-background  w-full h-full      pl-6 flex justify-between items-center">
      <div className="flex items-center gap-10  ">
        <div className="cursor-pointer hover:bg-foreground/10 text-foreground-700  w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center">
          <HiOutlineMenu className="h-4 w-4" />
        </div>
        <div>
          <Input
            variant="bordered"
            label="Search"
            icon="search"
            startIcon={true}
            isClearable={true}
            labelClassName="text-background"

          />
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

        <div className="flex border-l w-fit  px-6 cursor-pointer hover:bg-foreground/10  h-full  items-center gap-2">
          <div className="w-10 h-10 border rounded-full cursor-pointer     border-foreground-200 flex items-center justify-center ">
            <LuUser className="w-5 h-5" />
          </div>
          <label>Shaik Afrid</label>
        </div>
        <div className="border-l  cursor-pointer hover:bg-foreground/10 h-full flex px-6 items-center justify-center ">
          <GetIcon icon="settings" className="w-5 h-5 animate-spin" />
        </div>
      </div>
    </div>
  );
}

export default AppNavbar;
