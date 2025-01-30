import { ReactNode } from "react";
import { GoOrganization } from "react-icons/go";
import { GiOrganigram } from "react-icons/gi";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoChevronUpOutline } from "react-icons/io5";
import { FaCaretRight } from "react-icons/fa6";
import { GoTriangleUp } from "react-icons/go";
import { FaLock } from "react-icons/fa";
import { ImSpinner11 } from "react-icons/im";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { FaAddressCard } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa";

interface GetIconInterface {
  icon: string;
  className?: string;
}

function GetIcon({ icon, className }: GetIconInterface) {
  function getIcon(): ReactNode {
    switch (icon) {
      case "org":
        return <GoOrganization className={`  w-4 h-4 ${className} `} />;

      case "manageOrg":
        return <GiOrganigram className={`  w-4 h-4 ${className} `} />;

      case "dashboard":
        return (
          <RiDashboardHorizontalLine className={`  w-4 h-4 ${className} `} />
        );

      case "reports":
        return (
          <HiOutlineDocumentReport className={`  w-4 h-4 ${className} `} />
        );

      case "search":
        return <RiSearch2Line className={`  w-4 h-4 ${className} `} />;

      case "settings":
        return <IoSettingsOutline className={`  w-4 h-4 ${className} `} />;

      case "bell":
        return <FiBell className={`  w-4 h-4 ${className} `} />;

      case "x":
        return <IoMdClose className={`  w-4 h-4 ${className} `} />;

      case "menu":
        return <HiOutlineMenu className={`  w-4 h-4 ${className} `} />;

      case "down":
        return <IoIosArrowDown className={`  w-4 h-4 ${className} `} />;

      case "up":
        return <IoChevronUpOutline className={`  w-4 h-4 ${className} `} />;

      case "triangleUp":
        return <GoTriangleUp className={`  w-5 h-5 ${className} `} />;

      case "triangleRight":
        return <FaCaretRight className={`  w-4 h-4 ${className} `} />;

      case "user":
        return <AccountCircleIcon className={`  w-4 h-4 ${className} `} />;

      case "lock":
        return <FaLock className={`  w-4 h-4 ${className} `} />;

      case "regenerate":
        return <ImSpinner11 className={`  w-4 h-4 ${className} `} />;

      case "calender":
        return (
          <CalendarMonthOutlinedIcon className={`  w-4 h-4 ${className} `} />
        );

      case "call":
        return <CallOutlinedIcon className={`  w-4 h-4 ${className} `} />;

      case "email":
        return <EmailOutlinedIcon className={`  w-4 h-4 ${className} `} />;
      
      case "card":
        return <FaAddressCard className={`  w-5 h-5 mt-[0.2vh] ${className} `} />;
      
      case "star":
        return <FaStarOfLife className={`  w-2 h-2 ${className} `} />;
      
      
    }
  }

  return getIcon();
}

export default GetIcon;
