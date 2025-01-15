import { nextTableColumnType } from "@/types/appTableDatatyes";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { ReactNode, useEffect, useState } from "react";
import DataTableHeader from "../appcomponents/DataTableToolBar";

interface NextTableInterface {
  columns: nextTableColumnType[];
  tableData: any;
  isLoading?: boolean;
  TableToolbar: any;
  rows?: number;
}

function NextTable({
  columns,
  tableData,
  isLoading = false,
  TableToolbar,
  rows = 5,
}: NextTableInterface) {
  const [page, setPage] = useState<number>(1);
  const [filteredData, setFilteredData] = useState<any>([]);

  const [searchFilter, setSearchFilters] = useState<
    { key: string; value: string }[]
  >([]);

  useEffect(() => {
    if (!filteredData) {
      setFilteredData(tableData);
    }
    handleSearchFilters();
  }, [searchFilter]);

  function handleSearchFilters() {
    if (searchFilter?.length > 0) {
      for (let index = 0; index < searchFilter?.length; index++) {
        if (searchFilter[index].key === "search" && searchFilter[index].value) {
          const temp = [];
          for (let index1 = 0; index1 < tableData?.length; index1++) {
            if (
              tableData[index1]?.aUnitName
                ?.toLowerCase()
                .trim()
                .includes(searchFilter[index].value.toLowerCase().trim()) ||
              tableData[index1]?.aParentUnitId
                ?.toLowerCase()
                .trim()
                .includes(searchFilter[index].value.toLowerCase().trim()) ||
              tableData[index1]?.aUserId
                ?.toLowerCase()
                .trim()
                .includes(searchFilter[index].value.toLowerCase().trim())
            ) {
              temp.push(tableData[index1]);
            }
          }

          setFilteredData(temp);
        } else {
          setFilteredData(tableData);
        }
      }
    } else setFilteredData(tableData);
  }

  function handleSetSearchFilters(key: string, value: string) {
    if (searchFilter.filter((item) => item.key === key).length > 0) {
      setSearchFilters(
        searchFilter.filter((item) =>
          item.key === key ? (item.value = value) : item
        )
      );
    } else {
      setSearchFilters([
        ...searchFilter,
        {
          key,
          value,
        },
      ]);
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

  function generateRandomId(): string {
    return Math.random().toString(36).substring(2, 12);
  }

  return (
    <Table
      className="border border-foreground/20 px-5 py-2 rounded-md h-full"
      removeWrapper
      topContent={
        <div className="flex justify-between items-center">
          <DataTableHeader
            page={page}
            setPage={setPage}
            totalPages={Math.ceil(
              (filteredData ? filteredData : tableData)?.length / rows
            )}
            handleSetSearchFilters={handleSetSearchFilters}
          >
            {<TableToolbar handleSetSearchFilters={handleSetSearchFilters} />}
          </DataTableHeader>
        </div>
      }
      classNames={{
        wrapper: "rounded-md ",
        thead: " text-black  drop-shadow-lg",
        th: "text-black font-semibold text-md ",
        base: "h-full  overflow-auto",
      }}
    >
      <TableHeader>
        {columns.map((column, index) => (
          <TableColumn key={index}>
            <div>
              {typeof column?.header === "string"
                ? column.header
                : column?.header && column?.header()}
            </div>
          </TableColumn>
        ))}
      </TableHeader>

      <TableBody
        isLoading={isLoading}
        loadingContent={"Loading ..."}
        items={filteredData}
        emptyContent={"No results found !"}
      >
        {(item: any) => (
          <TableRow key={generateRandomId()}>
            {(columnKey) => {
              return (
                <TableCell className="py-5">
                  {renderCell(Object.keys(item)[columnKey as any], item)}
                </TableCell>
              );
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default NextTable;

/**
 * Sorting 
 * 
const sortedItems = React.useMemo(() => {
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);
 * 
 */
