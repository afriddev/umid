// import GetIcon from "@/components/appcomponents/GetIcon";
import Alert from "@/components/ui/Alert";
import NextButton from "@/components/ui/NextButton";
import NextInput from "@/components/ui/NextInput";
import NextTable from "@/components/ui/NextTable";
import { columnDef } from "@/types/appTableDatatyes";
import { Form } from "@nextui-org/react";

import { useState } from "react";

function Home() {
  const [alert, setAlert] = useState<{
    type: "success" | "error" | "info" | "warning";
    message: string;
  } | null>(null);
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data:", e.target.email.value, e.target.password.value);
    setTimeout(() => {
      setIsAlertVisible(true);
    }, 2000);
  };

  type studentType = {
    id: string;
    name: string;
    attended: boolean;
    mobileNumber: number;
    class: string;
    section: string;
    classTeacher: string;
  };

  const columns: columnDef<studentType>[] = [
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

  return (
    <div>
      <NextTable
        columns={columns}
        tableData={[
          {
            id: "id1",
            name: "Shaik Afrid",
            attended: false,
            mobileNumber: 9390558027,
            class: "10th Class",
            section: "A Sec",
            classTeacher: "Shaik Afrid",
          },
        ]}
      />

      <div className="p-10 ">
        <Form
          onSubmit={handleSubmit}
          validationBehavior="native"
          className="pt-10 flex flex-col gap-6  "
        >
         
          {isAlertVisible && <Alert type="success"  message={"submit form sucessful"} 
           onClose={() =>setIsAlertVisible(false)}/>}
          <NextInput
            isRequired={true}
            label="Email Id"
            placeholder="Please enter Email Id"
            name={"email"}
            type="email"
            errorMessage="please enter a valid Email"
            startIcon={true}
          />
          <div>
            <NextInput
              label="password"
              placeholder="Please enter password"
              labelPlacement="inside"
              variant="bordered"
              errorMessage="please enter a valid password"
              type="password"
              name="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              minLength={8}
              maxLength={15}
              isRequired={true}
              isDisabled={false}
              startIcon={true}
            />
          </div>

          <NextButton type="submit" color="primary" variant="solid">
            Submit
          </NextButton>
        </Form>
      </div>
    </div>
  );
}
export default Home;
