import NextButton from "@/components/ui/NextButton";
import SampleTable from "./Sampletable";
import { useState } from "react";
import AppDialog from "@/components/ui/AppDialog";
import CreateOrganisation from "./CreateOrganisation";

function SampleMain() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  function closeDialog() {
    setOpenDialog(false);
  }

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

      {(openDialog || true) && (
        <AppDialog closeMe={closeDialog}  right={true }>
         <CreateOrganisation  />
        </AppDialog>
      )}
    </div>
  );
}

export default SampleMain;
