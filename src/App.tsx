import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/login/Login";
import MainLayout from "./layouts/MainLayout";
import { useEffect } from "react";
import HomeV1 from "./pages/homepages/HomeV1";
import HomeV5 from "./pages/homepages/HomeV5";
import Register from "./pages/register/Register";

function App() {
  const loggedIn = localStorage.getItem("loggedIn");
  const navigate = useNavigate();

  // useEffect(()=>{

  //   console.log(loggedIn)

  //   if(loggedIn === "true"){
  //     navigate("/dashboard")
  //   }
  //   else navigate("/login")

  // },[loggedIn])

  // const { dispatch } = useAppContext();
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   dispatch({
  //     type: "addPathName",
  //     payload: pathname,
  //   });
  // }, [pathname]);
  // type store = {
  //   count: number;
  //   inc: () => void;
  // };
  // const useCounter = create<store>()((set) => {
  //   return {
  //     count: 1,
  //     inc: () =>
  //       set((state) => {
  //         return {
  //           count: state.count + 1,
  //         };
  //       }),
  //   };
  // });

  return (
    <div className="h-full w-full ">
      <Routes>
        <Route element={<HomeV1 />} path="/" />
        <Route element={<Register />} path="/register" />
        <Route element={<HomeV5 />} path="/forms" />
        <Route element={<Login />} path="/login" />
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
