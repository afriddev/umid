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
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent>{content}</PopoverContent>
    </Popover>
  );
}

export default NextPopover;
