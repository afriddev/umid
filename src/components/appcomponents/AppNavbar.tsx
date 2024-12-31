import { LuUser } from "react-icons/lu";
import { FiBell } from "react-icons/fi";

function AppNavbar() {
  return (
    <div className="bg-background text-foreground  w-full h-fit py-1 px-4  pl-10 flex justify-between items-center">
      <div>
        <div>
          <img
            src="umid-logo.png"
            className=" object-cover cursor-pointer lg:h-14 "
            alt="logo"
          />
        </div>
      </div>

      <div className="pr-2   flex gap-10">
        <div className="w-10 h-10  rounded-full cursor-pointer   border border-foreground-200 shadow-xl   flex items-center justify-center relative">
            <div className="absolute bg-destructive w-4 h-4  rounded-full  text-background  flex items-center justify-center -top-1 -right-1">
                10
            </div>
          <FiBell className="w-5 h-5" />
        </div>

        <div className="w-10 h-10 border rounded-full cursor-pointer     border-foreground-200 flex items-center justify-center shadow-xl drop-shadow-xl">
          <LuUser className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default AppNavbar;
