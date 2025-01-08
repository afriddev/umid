import NextButton from "@/components/ui/NextButton";
import SampleTable from "./Sampletable";
import { useState } from "react";
import AppDialog from "@/components/ui/AppDialog";

function SampleMain() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full justify-end">
        <div>
          <NextButton
            icon="user"
            startIcon={true}
            onclick={() => {
              setOpenDialog(true);
            }}
          >
            {" "}
            Create Student
          </NextButton>
        </div>
      </div>
      <SampleTable />


      {
        openDialog || true &&  <AppDialog >
             Hello wolrd
        </AppDialog>
      }
    </div>
  );
}

export default SampleMain;
