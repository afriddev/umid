import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import { useAppContext } from "./components/appcomponents/AppContext";

function App() {
  const { dispatch } = useAppContext();

  const { pathname } = useLocation();

  useEffect(() => {
    dispatch({
      type: "addPathName",
      payload: pathname,
    });
  }, [pathname]);

  return (
    <div className="h-full w-full  ">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/dashboard" />
      </Routes>
    </div>
  );
}

export default App;
