import Alert from "@/components/ui/Alert";
import NextButton from "@/components/ui/NextButton";
import NextInput from "@/components/ui/NextInput";
import { Select, SelectItem } from "@heroui/react";
import { RadioGroup, Radio } from "@heroui/react";

function HomeV5() {
  return (
    <div className="px-10 py-10">
      <div className="grid grid-cols-3 gap-10">
        <div className="max-w-[25vw] flex flex-col gap-4 border p-4 rounded-md  ">
          <NextInput label="User Name" variant="bordered" />
          <NextInput label="User Name" variant="faded" />
          <NextInput label="User Name" variant="flat" />
          <NextButton variant="bordered">Click Me</NextButton>
        </div>

        <div className="max-w-[25vw] flex flex-col gap-4 border p-4 rounded-md  ">
          <NextInput labelPlacement="inside" label="User Name" />
          <NextInput labelPlacement="outside" label="User Name" />
          <NextInput labelPlacement="outside-left" label="User Name" />
          <div className="flex items-center gap-6">
            <NextButton variant="flat">Click Me</NextButton>
            <NextButton variant="ghost">Click Me</NextButton>
            <NextButton variant="solid">Click Me</NextButton>
          </div>
        </div>

        <div className="max-w-[25vw] flex flex-col gap-4 border p-4 rounded-md  ">
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
          </Select>

          <Select
            color="primary"
            variant="faded"
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
          </Select>
          <Select
            color="primary"
            variant="underlined"
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
          </Select>

          <Select
            color="primary"
            variant="flat"
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
          </Select>
        </div>
        <div className="max-w-[25vw] flex flex-col gap-4 border p-4 rounded-md  ">
          <RadioGroup
            name="endLevel"
            label="Select Is End Level for organisation"
            orientation="horizontal"
            defaultValue={"no"}
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </RadioGroup>

          <RadioGroup
            name="endLevel"
            label="Select Is End Level for organisation"
            orientation="vertical"
            defaultValue={"no"}
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </RadioGroup>
        </div>

        <div className="max-w-[25vw] flex flex-col gap-4 border p-4 rounded-md  ">
          <Alert message="This is normal alert" onClose={() => {}} />
          <Alert
            message="This is normal alert"
            onClose={() => {}}
            type="error"
          />
          <Alert
            message="This is normal alert"
            onClose={() => {}}
            type="success"
          />
          <Alert
            message="This is normal alert"
            onClose={() => {}}
            type="warning"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeV5;
