import NextButton from "@/components/ui/NextButton";
import SampleTable from "./Sampletable";
import { useEffect, useState } from "react";
import AppDialog from "@/components/ui/AppDialog";
import CreateOrganisation from "./CreateOrganisation";
import studentsData from "./data";

function SampleMain() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [data, setData] = useState(studentsData);

  useEffect(() => {
    if (!data) setData(studentsData);
  }, []);

  function closeDialog() {
    setOpenDialog(false);
  }

  function handleAddOrganisation(dataa: any) {
    const temp = data;
    temp.push(dataa)
    setData(temp);
    setOpenDialog(false);
  }

  return (
    <div className="flex flex-col gap-2  h-full w-full relative mt-3">
      <div className="flex w-full justify-end absolute right-4 -top-14">
        <div>
          <NextButton
            icon="org"
            startIcon={true}
            onclick={() => {  
              setOpenDialog(true);
            }}
          >
            {" "}
            Create Organisation
          </NextButton>
        </div>
      </div>

      <SampleTable tableData={data} />

      {openDialog && (
        <AppDialog closeMe={closeDialog} right={true}>
          <CreateOrganisation handleAddOrganisation={handleAddOrganisation} />
        </AppDialog>
      )}
    </div>
  );
}

export default SampleMain;
