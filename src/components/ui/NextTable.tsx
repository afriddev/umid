import { nextTableColumnType } from "@/types/appTableDatatyes";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { ReactNode } from "react";

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
    <Table>
      <TableHeader>
        {columns.map((column, index) => (
          <TableColumn key={index}>
            {typeof column?.header === "string"
              ? column.header
              : column?.header && column?.header()}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody isLoading={isLoading} loadingContent={"Loading ..."} >
        {tableData?.map((item: any, index: number) => (
          <TableRow key={index}>
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
