import NextInput from "@/components/ui/NextInput";
// import { Select, SelectItem } from "@nextui-org/react";

function SampleTableToolBar({ handleSetSearchFilters }: any) {

  return (
    <div className="flex items-center gap-3">
      <NextInput
        icon="search"
        startIcon={true}
        label="Search by user id  or unit id"
        placeholder="Enter user Name or Email"
        className="w-[15vw]"
        onchange={(e: any) => {
          handleSetSearchFilters("search", e?.target?.value);
        }}
        isClearable={true}
      />
      {/* <div>
        <Select
          size="sm"
          itemHeight={10}
          label="Select User"
          className="w-[10vw]  "
        >
          <SelectItem>Afrid</SelectItem>
        </Select>
      </div> */}

      {/* <div>
        <Select
          size="sm"
          itemHeight={10}
          label="Select Role"
          className="w-[10vw]  "
        >
          <SelectItem>ADMIN</SelectItem>
        </Select>
      </div> */}
      {/* <NextButton>Search</NextButton> */}
    </div>
  );
}
export default SampleTableToolBar;
