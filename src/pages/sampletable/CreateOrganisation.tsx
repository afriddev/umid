import NextButton from "@/components/ui/NextButton";
import NextInput from "@/components/ui/NextInput";
import { Form } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";

function CreateOrganisation() {
  return (
    <div>
      <Form
        className="px-4 py-7 flex flex-col gap-6"
        validationBehavior="native"
        onSubmit={(e) => {
          e.preventDefault();
          let data = Object.fromEntries(new FormData(e.currentTarget));
          console.log(data);
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
          >
            <SelectItem>01</SelectItem>
            <SelectItem>02</SelectItem>
            <SelectItem>03</SelectItem>
            <SelectItem>04</SelectItem>
            <SelectItem>05</SelectItem>
          </Select>
          <RadioGroup
            label="Select Is End Level for organisation"
            orientation="horizontal"
             defaultValue={"no"}
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </RadioGroup>
        </div>
        <div className="w-full flex  px-10   justify-center text-center pt-10">
          <NextButton type="submit" className="w-full" >Submit</NextButton>
        </div>
      </Form>
    </div>
  );
}
export default CreateOrganisation;
