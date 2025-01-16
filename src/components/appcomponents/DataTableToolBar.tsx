import { Pagination } from "@nextui-org/react";

import React, { ReactNode } from "react";


interface DataTableHeaderInerface {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  children: ReactNode;
  searchquery?: string;
  setSearchQuery: (query: string) => void;
}

function DataTableHeader({
  page,
  setPage,
  totalPages,
  children,
  searchquery,
  setSearchQuery,
}: DataTableHeaderInerface) {
  return (
    <div className="flex items-center gap-3 justify-between">
      {children}
      <input
          id="search"
          type="text"
          placeholder="Enter keyword"
          value={searchquery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-2 py-1 rounded"
        />
      <div className="flex items-center gap-3">
        <div className="text-nowrap text-foreground-600">{`Page ${page} of ${totalPages}`}</div>
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
