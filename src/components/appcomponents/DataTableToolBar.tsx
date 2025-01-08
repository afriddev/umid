import { Pagination } from "@nextui-org/react";
import NextInput from "../ui/NextInput";
import React, { ReactNode } from "react";

import { Select, SelectItem } from "@nextui-org/react";
import NextButton from "../ui/NextButton";

interface DataTableHeaderInerface {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  children?: ReactNode;
}

function DataTableHeader({
  page,
  setPage,
  totalPages,
}: DataTableHeaderInerface) {
  return (
    <div className="flex items-center gap-3 justify-between">
      <div className="flex items-center gap-3">
        <NextInput
          label="Search by user Name or Email"
          placeholder="Enter user Name or Email"
          className="w-[15vw]"
          isClearable
        />
        <div>
          <Select
            size="sm"
            itemHeight={10}
            label="Select User"
            className="w-[10vw]  "
          >
            <SelectItem>Afrid</SelectItem>
          </Select>
        </div>

        <div>
          <Select
            size="sm"
            itemHeight={10}
            label="Select Role"
            className="w-[10vw]  "
          >
            <SelectItem>ADMIN</SelectItem>
          </Select>
        </div>
        <NextButton>Search</NextButton>
      </div>
      <div>
        <div className="flex w-full justify-center">
          <Pagination
            size="sm"
            radius="sm"
            isCompact
            color="secondary"
            page={page}
            total={totalPages}
            onChange={(page) => {
              setPage(page);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DataTableHeader;
