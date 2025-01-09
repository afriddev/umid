import { Select, SelectItem } from "@nextui-org/react"; 
import { ReactNode } from "react";

interface NextSelectInterface {
  children: ReactNode;
}
function NextSelect({ children }: NextSelectInterface) {
  return (
    <Select
      size={"xs" as any}
      itemHeight={10}
      label="Select User"
      className="min-w-[10vw]  "
    >
      {children as any}
    </Select>
  );
}

interface NextSelectItemInterface {
  children: ReactNode;
}

function NextSelectItem({ children }: NextSelectItemInterface) {
  return <SelectItem>{children}</SelectItem>;
}

export { NextSelect, NextSelectItem };  
