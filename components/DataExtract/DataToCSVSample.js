import React from 'react'
import { ExportToCsv } from "export-to-csv";

const DataToCSVSample = () => {
    var data = [
      {
        name: "Test 1",
        age: 13,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' ",
      },
      {
        name: "Test 2",
        age: 11,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' ",
      },
      {
        name: "Test 4",
        age: 10,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' ",
      },
    ];

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
      // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };

    const generateCSV =() =>{
    const csvExporter = new ExportToCsv(options);
    return csvExporter.generateCsv(data);
    }
    
  return (
    <div>
         <button onClick={generateCSV}>Generate CSV</button>
    </div>
  )
}

export default DataToCSVSample