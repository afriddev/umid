import { Accordion, AccordionItem } from "@heroui/react";
import { useAppContext } from "./AppContext";
import { IoChevronUpOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { ReactNode } from "react";
import GetIcon from "./GetIcon";

import menuRoutes from "./menu.json";
import { menuRouteType, routeType } from "@/types/appSidebarDatatypes";
import { useNavigate } from "react-router-dom";

function AppSidebar() {
  const { selectedMenu, dispatch } = useAppContext();
  const navigate = useNavigate();

  const accordionTitleClassName =
    " p-0  text-xs text-nowrap text-primary-foreground";

  function getIndicatorIcons({ isOpen }: any): ReactNode {
    return isOpen ? (
      <IoChevronUpOutline className="text-primary-foreground w-4 h-4 rotate-90" />
    ) : (
      <IoIosArrowDown className="text-primary-foreground w-4 h-4" />
    );
  }

  function handleMenuItemClick(
    key: string,
    title: string,
    desc: string | null,
    path: string | null,
    parentKey?: string | null
  ) {
    dispatch({
      type: "setSelectedMenu",
      payload: {
        key,
        title,
        desc,
        parentKey,
        path,
      },
    });
    navigate(`/${path}`);
  }

  return (
    <div className="w-full h-[99.9%]  ">
      <div className="flex flex-col gap-3 pl-6 pr-3  ">
        {menuRoutes?.routes?.map((menuItem: menuRouteType, index: number) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <div className="text-sidebar-foreground/40 -ml-3 font-bold text-[10px]">
                {menuItem?.heading.toUpperCase()}
              </div>

              <div className="flex flex-col gap-3">
                {menuItem?.routes?.map((route: routeType, index1) => {
                  return (
                    <div key={index1}>
                      {!route?.subPages && (
                        <div
                          onClick={() => {
                            handleMenuItemClick(
                              route.key,
                              route?.title,
                              route?.desc,
                              route?.path,
                              route?.parentKey
                            );
                          }}
                          className={`cursor-pointer flex items-center gap-3`}
                        >
                          <GetIcon icon={route?.icon} />
                          <div>{route?.title}</div>
                        </div>
                      )}

                      <div className="w-full">
                        {route?.subPages && route?.subPages?.length > 0 && (
                          <div className="w-full">
                            <Accordion
                              fullWidth={true}
                              className="group w-full p-0 flex items-center "
                            >
                              <AccordionItem
                                startContent={<GetIcon icon={route?.icon} />}
                                className=" flex flex-col h-fit -mt-4 -mb-4 w-full"
                                indicator={getIndicatorIcons}
                                key={route?.key}
                                title={route?.title}
                                classNames={{
                                  title: "text-sidebar-foreground  text-sm",
                                  content: "pl-5 -mt-3  flex flex-col gap-3",
                                }}
                              >
                                {route?.subPages?.map((item, index2) => (
                                  <div
                                    key={index2}
                                    className="flex items-center gap-3 text-sidebar-foreground cursor-pointer"
                                  >
                                    <GetIcon icon={item?.icon} />
                                    <div>{item?.title}</div>
                                  </div>
                                ))}
                              </AccordionItem>
                            </Accordion>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default AppSidebar;
