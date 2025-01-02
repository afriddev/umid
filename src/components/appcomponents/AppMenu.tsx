import { useNavigate } from "react-router-dom";
import { useAppContext } from "./AppContext";
import { MdKeyboardArrowRight } from "react-icons/md";

function AppMenu() {
  const { selectedMenu, navigatePathNames } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="w-fit flex flex-col">
      <div className="flex gap-1 lg:gap-3 lg:items-center lg:flex-row flex-col  ">
        <label className="text-xl font-semibold">{selectedMenu?.title}</label>
        <p className="text-md">{selectedMenu?.desc}</p>
      </div>
      {navigatePathNames?.length > 1 && (
        <div className="flex items-center pl-1">
          {navigatePathNames?.map((pathName: string, index: number) => {
            return (
              <div className="flex items-center">
                <div
                  onClick={() => {
                    navigate(pathName);
                  }}
                  className={`cursor-pointer border-foreground hover:text-foreground hover:border-b w-fit ${index === navigate?.length - 1 ? "text-foreground" : "text-foreground-400"}  `}
                >
                  {pathName === "/"
                    ? "Home"
                    : pathName.slice(1, pathName?.length)}
                </div>
                {index !== navigatePathNames?.length - 1 && (
                  <MdKeyboardArrowRight />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AppMenu;
