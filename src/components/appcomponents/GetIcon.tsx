import { ReactNode } from "react";
import { GoOrganization } from "react-icons/go";
import { GiOrganigram } from "react-icons/gi";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";

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
    }
  }

  return getIcon();
}

export default GetIcon;
