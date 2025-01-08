import { nextTableColumnType } from "@/types/appTableDatatyes";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { ReactNode, useState } from "react";
import GetIcon from "../appcomponents/GetIcon";
import DataTableHeader from "../appcomponents/DataTableToolBar";
import { Accordion, AccordionItem } from "@nextui-org/react";

interface NextTableInterface {
  columns: nextTableColumnType[];
  tableData: any;
  isLoading?: boolean;
}

function NextTable({
  columns,
  tableData,
  isLoading = false,
}: NextTableInterface) {
  const [page, setPage] = useState<number>(0);

  const [openAdditonalData, setOpenAdditonalData] = useState<
    | {
        value: boolean;
        index: number;
      }
    | undefined
  >(undefined);

  function handleOpenAdditionalData(index: number) {
    if (index !== openAdditonalData?.index) {
      setOpenAdditonalData({
        value: true,
        index,
      });
    } else {
      setOpenAdditonalData(undefined);
    }
  }

  function renderCell(key: string, data: any): ReactNode {
    const temp = columns?.filter((item) => item?.accessoryKey === key);

    if (temp?.length === 1) {
      const column = temp[0];
      if (column?.cell) {
        return column.cell({ row: data });
      }
    }

    return (
      <label>
        {data[key] || typeof data[key] === "boolean"
          ? typeof data[key] === "boolean"
            ? data[key]
              ? "True"
              : "False"
            : data[key]
          : "-"}
      </label>
    );
  }

  return (
    <Table
      className="border border-foreground/20 px-5 py-3 rounded-md"
      removeWrapper
      topContent={
        <DataTableHeader page={page} setPage={setPage} totalPages={10} />
      }
      classNames={{
        wrapper: "rounded-md ",
        thead: " text-black  drop-shadow-lg",
        th: "text-black font-semibold text-md ",
      }}
    >
      <TableHeader>
        {columns.map((column, index) => (
          <TableColumn key={index}>
            {typeof column?.header === "string"
              ? column.header
              : column?.header && column?.header()}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody isLoading={isLoading} loadingContent={"Loading ..."}>
        {tableData?.map((item: any, index: number) => (
          <TableRow key={index}>
            {columns.map((column, index2) => {
              return (
                <TableCell key={index2}>
                  <div className="flex flex-col *:gap-1">
                    <div className="flex gap-1 items-center">
                      <div
                        onClick={() => {
                          handleOpenAdditionalData(index);
                        }}
                        className="flex items-center   gap-2 cursor-pointer"
                      >
                        {index2 === 0 && (
                          <div className="">
                            <GetIcon
                              icon={`${openAdditonalData?.index === index && openAdditonalData?.value ? "triangleUp" : "triangleRight"}`}
                            />
                          </div>
                        )}
                      </div>
                      {renderCell(column?.accessoryKey, item)}
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out bg-gray-50 ${
                        openAdditonalData?.value
                          ? "max-h-screen opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="p-4">
                        This is the content that will show and hide with
                        animation.
                      </p>
                    </div>
                  </div>
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default NextTable;
