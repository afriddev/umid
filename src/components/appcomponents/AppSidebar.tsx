import { Accordion, AccordionItem } from "@nextui-org/react";
import { useAppContext } from "./AppContext";
import { IoChevronUpOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { ReactNode } from "react";
import GetIcon from "./GetIcon";


import menuRoutes from "./menu.json";
import { menuRouteType, routeType } from "@/types/appSidebarDatatypes";

function AppSidebar() {
  const { selectedMenu, dispatch } = useAppContext();

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
    desc: string,
    path: string,
    parentKey?: string
  ) {
    dispatch({
      type: "setSelectedMenu",
      payload: {
        key,
        title,
        desc,
        parentKey,
      },
    });
    // router.push(`/${path}`);
  }

  return (
    <div className="w-full h-[99.9%]  ">
      <div className="flex flex-col gap-3 pl-6 pr-3  ">
        {menuRoutes?.routes?.map((menuItem: menuRouteType, index: number) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <div className="text-primary-foreground/40 -ml-3 font-bold text-[10px]">
                {menuItem?.heading.toUpperCase()}
              </div>

              <div className="flex flex-col gap-3">
                {menuItem?.routes?.map((route: routeType, index) => {
                  return (
                    <div key={index}>
                      {!route?.subPages && (
                        <div
                          className={`cursor-pointer flex items-center gap-3`}
                        >
                          <GetIcon icon={route?.icon} />
                          <div>{route?.title}</div>
                        </div>
                      )}

                      <div className="">
                        {route?.subPages && route?.subPages?.length > 0 && (
                          <div className="">
                            <Accordion className="group p-0 flex items-center  h-4  m-0 py-0  ">
                              <AccordionItem
                                indicator={getIndicatorIcons}
                                key={route?.key}
                                title={route?.title}
                                classNames={{
                                  title: "text-primary-foreground text-xs",
                                  content: "pl-5  flex flex-col gap-3 ",
                                }}
                              >
                                {route?.subPages?.map((item, index) => (
                                  <div className="flex items-center gap-3 text-primary-foreground cursor-pointer">
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

        {/* <li
          onClick={() => {
            handleMenuItemClick("1", DASHBOARD, DASHBOARD_DESC, "dashboard");
          }}
          className={` cursor-pointer  flex items-center gap-3  ${selectedMenu?.key === "1" && !selectedMenu?.parentKey ? "text-primary-foreground" : "text-primary-foreground/60"} hover:text-primary-foreground `}
        >
          <GetIcon icon="dashboard" />
          {DASHBOARD}
        </li>

        <Accordion
          onSelectionChange={(keys) => {
            console.log(keys);
          }}
          defaultExpandedKeys={[2]}
          className="-ml-2"
        >
          <AccordionItem
            indicator={getIndicatorIcons}
            key={"2"}
            title={ORGANISATION_MANAGEMENT}
            startContent={<GetIcon icon="org" />}
            className="text-primary-foreground"
            classNames={{
              title: accordionTitleClassName,
            }}
          >
            <div className="ml-10">
              <li
                onClick={() => {
                  handleMenuItemClick(
                    "1",
                    MANAGE_ORGANISATION,
                    MANAGE_ORGANISATION_DESC,
                    "manageorganisation",
                    "2"
                  );
                }}
                className={` flex items-center gap-3 cursor-pointer  ${selectedMenu?.key === "1" && selectedMenu?.parentKey === "2" ? "text-primary-foreground" : "text-primary-foreground/60"} hover:text-primary-foreground  `}
              >
                <GetIcon icon="manageOrg" />
                {MANAGE_ORGANISATION}
              </li>
            </div>
          </AccordionItem>
        </Accordion> */}
      </div>
    </div>
  );
}
export default AppSidebar;
