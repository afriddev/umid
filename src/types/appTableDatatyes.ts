export type nextTableColumnType = {
  id?: string;
  accessoryKey: string;
  cell?: ({ row }: { row?: any }) => JSX.Element;
  header: string | (() => JSX.Element);
};

export type columnDef<dataType> = {
  id?: string;
  accessoryKey: keyof dataType;
  cell?: ({ row }: { row?: dataType }) => JSX.Element;
  header: string | (() => JSX.Element);
};
