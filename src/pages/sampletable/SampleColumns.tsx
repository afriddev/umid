import { columnDef } from "@/types/appTableDatatyes";

interface studentType {
  aUnitName: string;
  aParentUnitId: string;
  aLevel: boolean;
  aEndLevel: number;
  aUserId: string;
  aEntryDate: string;
  aUpdatedAt: string;
}

const sampleColumns: columnDef<studentType>[] = [
  {
    accessoryKey: "id",
    header: "Roll No ",
  },

  {
    accessoryKey: "name",
    header: "Full Name",
  },
  {
    accessoryKey: "mobileNumber",
    header: "Parent Mobile No",
  },
  {
    accessoryKey: "class",
    header: "Class",
  },
  {
    accessoryKey: "section",
    header: "Section",
  },

  {
    accessoryKey: "classTeacher",
    header: "Class teacher",
  },

  {
    accessoryKey: "attended",
    header: "Attended",
  },
];

export default sampleColumns;
