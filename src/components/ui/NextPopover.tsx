import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { ReactNode } from "react";

interface NextPopoverInterafce {
  contentPacement?: "bottom" | "top";
  trigger: ReactNode;
  content: ReactNode;
}

function NextPopover({
  contentPacement = "bottom",
  content,
  trigger,
}: NextPopoverInterafce) {
  return (
    <Popover placement={contentPacement}>
      <PopoverTrigger>
        {<div className="text-lg hover:text-[#55E6A5] hover:border-b duration-300 ease-in-out hover:border-[#55E6A5] hover:scale-105  cursor-pointer">{trigger}</div>}
      </PopoverTrigger>
      <PopoverContent>{content}</PopoverContent>
    </Popover>
  );
}

export default NextPopover;
