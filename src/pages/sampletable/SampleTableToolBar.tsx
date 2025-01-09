
import NextButton from "@/components/ui/NextButton";
import NextInput from "@/components/ui/NextInput";
import { Select, SelectItem } from "@nextui-org/react";

function SampleTableToolBar() {
  return (
    <div className="flex items-center gap-3">
      <NextInput
        label="Search by user id  or unit id"
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
  );
}
export default SampleTableToolBar;
