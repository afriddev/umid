import { useAppContext } from "@/components/appcomponents/AppContext";
import AppMenu from "@/components/appcomponents/AppMenu";
import AppNavbar from "@/components/appcomponents/AppNavbar";
import AppSidebar from "@/components/appcomponents/AppSidebar";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface MainLayoutInterface {
  children: ReactNode;
}


function MainLayout({ children }: MainLayoutInterface) {
  const { openSidebar } = useAppContext();
  const navigate = useNavigate();

  return (
    <div>
      <div className="h-screen w-screen flex flex-col bg-background ">
        <div className="w-full h-full flex items-center">
          <div
            className={`${openSidebar ? "flex flex-col " : "hidden"}  absolute w-fit z-[998] lg:relative  lg:flex lg:flex-col gap-4 h-full lg:w-[17vw] bg-sidebar text-sidebar-foreground  `}
          >
            <div className="h-[7vh] border-b  flex items-center justify-center border-sidebar-foreground/30">
              <div
                onClick={() => {
                  navigate("/");
                }}
                className="h-[7vh] flex p-2 cursor-pointer "
              >
                <img alt="logo" src="umid.png" className="h-full " />
              </div>
            </div>
            <div className="h-full w-full ">
              <AppSidebar />
            </div>
          </div>

          <div className="h-full  w-full flex-col  flex items-center ">
            <div className=" h-[7vh]   w-full  flex justify-center">
              <div className="border-b h-[7vh] bg-gradient-to-r from-primary-500 to-secondary-400  w-full ">
                <AppNavbar />
              </div>
            </div>
            <div className="w-full   h-full p-3">
              <AppMenu />
              <div className=" ml-2 mt-2 p-1 text-foreground">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainLayout;
