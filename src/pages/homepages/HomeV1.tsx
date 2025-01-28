import GetIcon from "@/components/appcomponents/GetIcon";
import NextButton from "@/components/ui/NextButton";
import NextPopover from "@/components/ui/NextPopover";
import { useNavigate } from "react-router-dom";

function HomeV1() {
  //bg-[#02050A] text-white
  // bg-white text-black 
  const navigate = useNavigate()
  return (
    <div className=" w-[100vw] font-sans h-[100vh] bg-[#02050A] text-white flex flex-col  ">
      <div className="flex items-center  gap-4 py-3 px-10  w-full justify-between ">
        <div>
          <img src="umid.png" className=" max-w-[7vw]" />
        </div>
        <div className="flex items-center  w-[50vw] gap-4 justify-between">
          <div className="text-lg font-semibold text-[#55E6A5]  cursor-pointer border-b border-[#55E6A5]  hover:scale-105 duration-300 ease-in  ">
            Home
          </div>
          <NextPopover
            trigger={<div className="font-semibold">Guidelines</div>}
            content={"Nothing"}
          />
          <NextPopover
            trigger={<div className="font-semibold">Medical Info</div>}
            content={"Nothing"}
          />
          <NextPopover
            trigger={<div className="font-semibold">Help Desk</div>}
            content={"Nothing"}
          />
          <NextPopover
            trigger={<div className="font-semibold">Dashboard</div>}
            content={"Nothing"}
          />
          <div onClick={()=>{
            navigate("/login")
          }} className="flex font-semibold hover:scale-105 hover:border-b hover:text-[#55E6A5] hover:border-[#55E6A5]  duration-300 ease-in  items-center gap-1 cursor-pointer">
            <GetIcon icon="user" /> <div className="text-lg ">Login</div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-20 ">
            <img src="railway-logo.png" className="max-w-[4vw]" />
            <img src="railtel-logo.png" className="max-w-[3vw]" />
          </div>
        </div>
      </div>

      <div className="h-full items-center gap-32  justify-center  flex">
        <div className="flex flex-col gap-10">
          <div className="text-[60px] font-semibold gap-4  flex items-center">
            Welcome to <img className="h-24 rounded-full" src="about-2.jpg" />
          </div>
          <div className="text-[40px]">
            SMART HEALTH CARD SYSTEM IN INDIAN RAILWAYS
          </div>
          <div className="text-[40px]">
            भारतीय रेल्वे मे स्मार्ट मेडिकल कार्ड सिस्टिम
          </div>
          <div className="flex items-center gap-10">
            <img src="arraow.png" className="w-[30vh]" />
            <NextButton onclick={()=>{
              navigate("/login")
            }} className="bg-[#55E6A5] text-black h-14 text-xl w-[10vw]">
              Register Here
            </NextButton>
          </div>
        </div>
        <div>
          <img src="read.jpg" className="h-[70vh] rounded-tl-[10vw] rounded-br-[10vw] " />
        </div>
      </div>
    </div>
  );
}
export default HomeV1;
