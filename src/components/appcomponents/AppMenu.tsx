import { useAppContext } from "./AppContext";

function AppMenu() {
  const { selectedMenu } = useAppContext();

  return (
    <div className="flex gap-3 items-center ">
      <label className="text-xl font-semibold">{selectedMenu?.title}</label>
      <p className="text-md">{selectedMenu?.desc}</p>
    </div>
  );
}

export default AppMenu;
