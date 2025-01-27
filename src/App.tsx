import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import { useAppContext } from "./components/appcomponents/AppContext";

import { create } from "zustand";
import Login from "./pages/login/Login";
import MainLayout from "./layouts/MainLayout";

function App() {
  const { dispatch } = useAppContext();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch({
      type: "addPathName",
      payload: pathname,
    });
  }, [pathname]);

  type store = {
    count: number;
    inc: () => void;
  };

  const useCounter = create<store>()((set) => {
    return {
      count: 1,
      inc: () =>
        set((state) => {
          return {
            count: state.count + 1,
          };
        }),
    };
  });

  return (
    <div className="h-full w-full  ">
      <Routes>
        <Route element={<Login />} path="/" />
        <Route
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
          path="/dashboard"
        />
      </Routes>
    </div>
  );
}

export default App;
