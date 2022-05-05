import { useMemo } from "react";
import MOCK_DATA from "./MOCK_DATA.json";
import { ExportToCsv } from "export-to-csv";

const DataToCSV = () => {
    
 const data = useMemo(() => MOCK_DATA, []);
 const options = {
   fieldSeparator: ",",
   quoteStrings: '"',
   decimalSeparator: ".",
   showLabels: true,
   showTitle: true,
   title: "json to Excel",
   useTextFile: false,
   useBom: true,
   useKeysAsHeaders: true,
 };
 
  const csvExporter = new ExportToCsv(options);
  return (csvExporter.generateCsv(data));
}

export default DataToCSV