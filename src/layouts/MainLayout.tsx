import AppMenu from "@/components/appcomponents/AppMenu";
import AppSidebar from "@/components/appcomponents/AppSidebar";
import { ReactNode } from "react";

interface MainLayoutInterface {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutInterface) {
  return (
    <div>
      <div className="h-screen w-screen flex flex-col bg-background ">
        <div className="w-full h-full flex items-center">
          <div className=" flex flex-col gap-4 h-full w-[17vw] bg-primary text-primary-foreground  ">
            <div className="border-b  border-primary-foreground/20 pb-2 w-full flex justify-center pt-2">
              <img alt="logo" src="umid-logo.png" className="h-16" />
            </div>
            <AppSidebar />
          </div>
          <div className="h-full  w-full flex items-center ">
            <div className="border border-foreground-200 shadow-2xl drop-shadow-2xl w-full mr-1 rounded-md p-3  h-full">
              <AppMenu />
              <div className="mt-2 ml-2 text-foreground">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainLayout;
