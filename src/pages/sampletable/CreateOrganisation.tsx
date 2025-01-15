import NextButton from "@/components/ui/NextButton";
import NextInput from "@/components/ui/NextInput";
import { Form } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";

interface CreateOrganisationInteraface {
  handleAddOrganisation: (data:any) => void;
}

function CreateOrganisation({
  handleAddOrganisation,
}: CreateOrganisationInteraface) {
  function handleAddOrganisationClick(data: {
    ref: string;
    org: string;
    level: string;
    endLevel: string;
  }) {
    const tempData = {
      aUnitName: data?.org,
      aParentUnitId: data?.ref ?? "P001",
      aLevel: data.level.slice(2, data?.level?.length),
      aEndLevel: false,
      aUserId: "U003",
      aEntryDate: "2023-03-01",
      aUpdatedAt: "2023-12-17",
    };
    handleAddOrganisation(tempData)
  }

  return (
    <div>
      <Form
        className="px-4 py-7 flex flex-col gap-6"
        validationBehavior="native"
        onSubmit={(e) => {
          e.preventDefault();
          let data = Object.fromEntries(new FormData(e.currentTarget));
          handleAddOrganisationClick(data as any);
        }}
      >
        <div className="flex flex-col gap-5 w-full">
          <NextInput
            label="Enter Organisation Name"
            isRequired={true}
            icon="org"
            startIcon={true}
            errorMessage={"Please enter Organisation Name"}
            name="org"
          />

          <NextInput
            label="Enter Reference Id"
            isRequired={false}
            icon="manageOrg"
            startIcon={true}
            name="ref"
          />
          <Select
            color="primary"
            variant="bordered"
            isRequired={true}
            size="md"
            itemHeight={10}
            label="Select Level"
            className="w-full  "
            errorMessage="Please select Level"
            name="level"
          >
            <SelectItem>1</SelectItem>
            <SelectItem>2</SelectItem>
            <SelectItem>3</SelectItem>
            <SelectItem>4</SelectItem>
            <SelectItem>5</SelectItem>
          </Select>
          <RadioGroup
            name="endLevel"
            label="Select Is End Level for organisation"
            orientation="horizontal"
            defaultValue={"no"}
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </RadioGroup>
        </div>
        <div className="w-full flex  px-10   justify-center text-center pt-10">
          <NextButton type="submit" className="w-full">
            Submit
          </NextButton>
        </div>
      </Form>
    </div>
  );
}
export default CreateOrganisation;
