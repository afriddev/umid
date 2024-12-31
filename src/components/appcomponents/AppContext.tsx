"use client";
import { contextType, dispatchDataType } from "@/types/appContextDatatypes";
import { createContext, ReactNode, useContext, useReducer } from "react";

const initState: contextType = {
  dispatch: () => {},
  defaultTheme: "root",
  selectedMenu: {
    key: "1",
    parentKey: null,
    desc: "View And analyse users,organisation and more...",
    title: "Dashboard",
  },
};

const contextProvider = createContext(initState);

function reducer(state: contextType, action: dispatchDataType) {
  switch (action?.type) {
    case "setTheme":
      return {
        ...state,
        defaultTheme: action?.payload,
      };

    case "setSelectedMenu":
      return {
        ...state,
        selectedMenu: {
          key: action?.payload?.key,
          parentKey: action?.payload?.parentKey ?? null,
          desc: action?.payload?.desc,
          title: action?.payload?.title,
        },
      };

    default:
      throw new Error("Action unkonwn");
  }
}
export default function AppContext({ children }: { children: ReactNode }) {
  const [{ defaultTheme, selectedMenu }, dispatch] = useReducer(
    reducer,
    initState
  );

  return (
    <contextProvider.Provider
      value={{
        dispatch,
        defaultTheme,

        selectedMenu,
      }}
    >
      {children}
    </contextProvider.Provider>
  );
}

export function useAppContext() {
  const context = useContext(contextProvider);
  if (!context) throw new Error("Unable to use!");
  return context;
}
