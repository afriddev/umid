import { ReactNode } from "react";
import { GoOrganization } from "react-icons/go";
import { GiOrganigram } from "react-icons/gi";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";


interface GetIconInterface {
  icon: string;
}

function GetIcon({ icon }: GetIconInterface) {
  function getIcon(): ReactNode {
    switch (icon) {
      case "org":
        return <GoOrganization className="w-4 h-4" />;
        
      case "manageOrg":
        return <GiOrganigram className="w-4 h-4" />;
        
      case "dashboard":
        return <RiDashboardHorizontalLine className="w-4 h-4" />;
      
      case "reports":
        return <HiOutlineDocumentReport className="w-4 h-4" />;
      
      
      


    }
  }

  return getIcon();
}

export default GetIcon