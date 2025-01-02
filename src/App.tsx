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
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Home />} path="/dashboard" />
    </Routes>
  );
}

export default App;
