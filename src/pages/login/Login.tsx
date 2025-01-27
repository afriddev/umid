import NextButton from "@/components/ui/NextButton";
import NextInput from "@/components/ui/NextInput";
import { useGenerateCaptha } from "./Capthautils";
import { useEffect, useState } from "react";
import GetIcon from "@/components/appcomponents/GetIcon";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const { generateCaptha } = useGenerateCaptha();
  const [captha, setCaptha] = useState<string>(generateCaptha(5));

  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  function reGenerateCaptha() {
    setCaptha(generateCaptha(5));
  }

  function handleLogin(e: any) {
    console.log(e);
  }

  useEffect(() => {
    console.log(errors.username?.message);
  }, [errors]);

  return (
    <div className="w-[100vw] h-[100vh] relative">
      <div className="w-[100vw] flex absolute inset-0 z-[100]    ">
        <img src="login-bg.svg" className="object-cover w-[100vw]" />
      </div>
      <div className="w-[100vw] h-[100vh] flex flex-col z-[999] absolute items-center justify-center p-3 px-10 ">
        <div className="flex  h-[90%]  items-center justify-center ">
          <div className="w-1/2">
            <img
              alt="Login Image"
              src="login.png"
              className="object-fill w-[40vw] h-[70vh] "
            />
          </div>
          <div className="h-[70%] mr-[5vw] w-[1px] bg-gray-400"></div>
          <div className="w-[35vw] ">
            <div className="flex flex-col gap-10 items-center  w-full h-1/2">
              <div className="flex flex-col items-center gap-3">
                <img alt="logo" src="umid-logo.png" className="w-[10vw]" />
                <label className="text-xl text-blue-900 font-bold ">
                  Digital Indian Railways - User Management System
                </label>
              </div>

              <form
                onSubmit={handleSubmit(handleLogin)}
                className="flex flex-col  items-center gap-8"
              >
                <div className="flex flex-col gap-5 w-[25vw] ">
                  <NextInput
                    isRequired={true}
                    errorMessage={
                      "Please enter Employee P.F No / Pensioner PPO No."
                    }
                    {...register("username", {
                      required: "Please enter Employee P.F No",
                    })}
                    icon="user"
                    startIcon={true}
                    label="Employee P.F No / Pensioner PPO No."
                  />
                  <NextInput
                    isRequired={true}
                    errorMessage={"Please enter Password"}
                    {...register("password", {
                      required: "Please enter Password",
                    })}
                    type="password"
                    icon="lock"
                    startIcon={true}
                    label="Password"
                  />
                  <div className="flex gap-5 item-center">
                    <div className="flex items-center gap-1">
                      <div className="bg-black/40  h-12 text-2xl font-semibold tracking-[10px] text-black items-center justify-center px-4 rounded-lg  flex w-[10vw] ">
                        {captha}
                      </div>
                      <div
                        className="cursor-pointer ml-1"
                        onClick={reGenerateCaptha}
                      >
                        <GetIcon icon="regenerate" />
                      </div>
                    </div>

                    <div className="w-[10vw]">
                      <NextInput
                        isRequired={true}
                        label="Captha"
                        errorMessage={"Please enter Captha!"}
                        {...register("captha", {
                          required: "Please enter Captha!",
                        })}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <NextButton
                    onclick={() => {
                      console.log(errors);
                      navigate("/dashboard");
                      localStorage.setItem("loggedIn","true")
                    }}
                    type="submit"
                    className="min-w-[10vw]"
                  >
                    Login
                  </NextButton>
                </div>
              </form>
            </div>
            <div className="flex flex-col gap-4 items-center mt-4">
              <div className="border rounded-full flex items-center justify-center w-10 h-10">
                OR
              </div>
              <div className="flex gap-10">
                <NextButton className="rounded-full bg-blue-900  ">
                  Goto Website
                </NextButton>
                <NextButton className="rounded-full bg-purple-700  ">
                  Register
                </NextButton>
                <NextButton className="rounded-full bg-red-600 ">
                  Forgot Password
                </NextButton>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-1">
          <div className="bg-green-300 flex items-center    px-8  p-2 text-nowrap">
            <div className="text-red-600 mr-1  font-semibold">Note : </div>For
            UMID Related Queries, Please reach out on 040-27788200, Email on{" "}
            <a href="ok" className="border-b border-black/60">
              supporthmis@railtelindia.com
            </a>
          </div>
        </div>
        <div className="mt-2">
          <div className="bg-yellow-200 p-2  px-8 ">
            <div className="flex items-center ">
              <span className="text-red-600 font-bold mr-1">Alert :</span>
              UMID Portal will be taken up for Maintenance every night from
              09:00 P.M to 07:00 A.M. Hence, the portal will not be working
              during this period. Kindly cooperate.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
