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
import DataTableHeader from "../appcomponents/DataTableToolBar";

interface NextTableInterface {
  columns: nextTableColumnType[];
  tableData: any;
  isLoading?: boolean;
  tableToolbar: ReactNode;
}

function NextTable({
  columns,
  tableData,
  isLoading = false,
  tableToolbar,
}: NextTableInterface) {
  const [page, setPage] = useState<number>(1);

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
      isHeaderSticky
      className="border border-foreground/20 px-5 py-2 rounded-md"
      removeWrapper
      topContent={
        <DataTableHeader page={page} setPage={setPage} totalPages={10}>
          {tableToolbar}
        </DataTableHeader>
      }
      classNames={{
        wrapper: "rounded-md ",
        thead: " text-black  drop-shadow-lg",
        th: "text-black font-semibold text-md ",
        base: "max-h-[50vh]  overflow-auto",
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
          <TableRow key={index} className="relative h-[10vh] ">
            {columns.map((column, index2) => {
              return (
                <TableCell key={index2}>
                  {renderCell(column?.accessoryKey, item)}
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
