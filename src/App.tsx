import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/login/Login";
import MainLayout from "./layouts/MainLayout";
import { useEffect } from "react";
import HomeV1 from "./pages/homepages/HomeV1";
<<<<<<< HEAD
import Homev2 from "./pages/homepages/Homev2";
import HomeV3 from "./pages/homepages/HomeV3";
=======
import HomeV5 from "./pages/homepages/HomeV5";
import Register from "./pages/register/Register";
>>>>>>> c1e49b54e80bc75052722fcb4ac698005c626ce9

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
<<<<<<< HEAD
        <Route element={<Homev2 />} path="/v2" />
        <Route element={<HomeV3 />} path="/v3" />
=======
        <Route element={<Register />} path="/register" />
        <Route element={<HomeV5 />} path="/forms" />
>>>>>>> c1e49b54e80bc75052722fcb4ac698005c626ce9
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
