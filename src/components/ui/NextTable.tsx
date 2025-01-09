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
import NextInput from "./NextInput";

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
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  function filterData(data: any[], query: string): any[] {
    if (!query.trim()) {
      return data;
    }
    const lowerCaseQuery = query.toLowerCase();
    return data.filter((item: any) =>
      Object.values(item).some((value) =>
        value?.toString().toLowerCase().includes(lowerCaseQuery)
      )
    );
  }

  const filteredData = filterData(tableData, searchQuery);

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
      className="border border-foreground/20 px-5 py-2 rounded-md"
      removeWrapper
      topContent={
        <>
          <div className="flex justify-between items-center">
            <NextInput
              label="Search by user id  or unit id"
              placeholder="Enter user Name or Email"
              className="w-[15vw]"
              onchange={(e: any) => setSearchQuery(e.target.value)}
            />
            <DataTableHeader page={page} setPage={setPage} totalPages={10}>
              {tableToolbar}
            </DataTableHeader>
          </div>
        </>
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
        {filteredData?.map((item: any, index: number) => (
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
