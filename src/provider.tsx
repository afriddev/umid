import type { NavigateOptions } from "react-router-dom";

import { HeroUIProvider } from "@heroui/system";
import { useNavigate } from "react-router-dom";
import AppContext from "./components/appcomponents/AppContext";

import "./styles/globals.css"



declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}


export function Provider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <AppContext>
      <HeroUIProvider navigate={navigate}>{children}</HeroUIProvider>
    </AppContext>
  );
}
