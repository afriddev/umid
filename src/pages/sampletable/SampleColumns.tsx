import { columnDef } from "@/types/appTableDatatyes";

interface organisationType {
  aUnitName: string;
  aParentUnitId: string;
  aLevel: boolean;
  aEndLevel: number;
  aUserId: string;
  aEntryDate: string;
  aUpdatedAt: string;
}

const sampleColumns: columnDef<organisationType>[] = [
  {
    accessoryKey: "aUnitName",
    header: "Full Name",
  },

  {
    accessoryKey: "aParentUnitId",
    header: "Parent Unit id ",
  },

  {
    accessoryKey: "aLevel",
    header: "Level",
  },

  {
    accessoryKey: "aEndLevel",
    header: "End Level",
  },

  {
    accessoryKey: "aUserId",
    header: "User Id",
  },

  {
    accessoryKey: "aEntryDate",
    header: "Entry Date",
  },
  {
    accessoryKey: "aUpdatedAt",
    header: "Updated At",
  },
];

export default sampleColumns;
