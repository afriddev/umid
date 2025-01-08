import { Pagination } from "@nextui-org/react";

import React, { ReactNode } from "react";


interface DataTableHeaderInerface {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  children: ReactNode;
}

function DataTableHeader({
  page,
  setPage,
  totalPages,
  children,
}: DataTableHeaderInerface) {
  return (
    <div className="flex items-center gap-3 justify-between">
      {children}
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
