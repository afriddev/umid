import NextTable from "@/components/ui/NextTable";
import sampleColumns from "./SampleColumns";
import SampleTableToolBar from "./SampleTableToolBar";


interface SampleTableInterface{

  tableData:any

  

}

function SampleTable({tableData}:SampleTableInterface) {
  return (
    <div className="flex h-full">
      <NextTable
        columns={sampleColumns}
        tableData={tableData}
        TableToolbar={SampleTableToolBar}
      />
    </div>
  );
}

export default SampleTable;
