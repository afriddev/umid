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
    accessoryKey: "aUserId",
    header: "User Id",
  },
  {
    accessoryKey: "aParentUnitId",
    header: "Parent Umit id ",
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
    accessoryKey: "aEntryDate",
    header: "Entry Date",
  },
  {
    accessoryKey: "aUpdatedAt",
    header: "Updated At", 
  },

  
];

export default sampleColumns;
