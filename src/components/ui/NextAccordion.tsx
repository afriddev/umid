import { Accordion, AccordionItem } from "@heroui/react";
import { ReactNode } from "react";
import GetIcon from "../appcomponents/GetIcon";

interface NextAccordionInterface {
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

interface NextAccordionItemInterface {
  icon?: string;
  className?: string;
  key?: string;
  title?: string;
  classNameTitle?: string;
  classNameContent?: string;
  children?: ReactNode;
}

function NextAccordion({
  fullWidth = true,
  className,
  children,
}: NextAccordionInterface) {
  return (
    <Accordion fullWidth={fullWidth} className={`${className}`}>
      {children as any}
    </Accordion>
  );
}

function NextAccordionItem({
  className,
  classNameContent,
  classNameTitle,
  icon,
  key,
  title,
  children,
}: NextAccordionItemInterface) {
  function getIcon() {
    return <GetIcon icon={icon ?? ""} />;
  }
  function getIndicatorIcons({ isOpen }: any): ReactNode {
    return <GetIcon icon={isOpen ? "up" : "down"} />;
  }

  return (
    <AccordionItem
      startContent={getIcon()}
      className={`${className}`}
      indicator={getIndicatorIcons}
      key={key}
      title={title}
      classNames={{
        content: ` pl-5 -mt-3  flex flex-col gap-3 ${classNameContent}`,
        title: `text-sidebar-foreground  text-sm ${classNameTitle}`,
      }}
    >
      {children}
    </AccordionItem>
  );
}

export { NextAccordion, NextAccordionItem };
