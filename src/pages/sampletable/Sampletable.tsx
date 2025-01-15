import NextTable from "@/components/ui/NextTable";
import sampleColumns from "./SampleColumns";
import studentsData from "./data";
import SampleTableToolBar from "./SampleTableToolBar";

function SampleTable() {
  return (
    <div className="flex h-full">
      <NextTable
        columns={sampleColumns}
        tableData={studentsData}
        TableToolbar={SampleTableToolBar}
      />
    </div>
  );
}

export default SampleTable;
