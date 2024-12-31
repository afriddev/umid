import type { NavigateOptions } from "react-router-dom";

import { NextUIProvider } from "@nextui-org/system";
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
      <NextUIProvider navigate={navigate}>{children}</NextUIProvider>
    </AppContext>
  );
}
