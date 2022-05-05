import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import {Stack, TextField } from '@mui/material'
import "../../assets/css/extract-table.css";

// prevent on keyup search if larger data set
const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);

  return (
    // <Stack spacing={4}>
    //   <Stack spacking={2} direction="row">
    //     <TextField
    //       label="Search"
    //       value={value || ""}
    //       variant="standard"
    //        onChange={(e) => {
    //            setValue(e.target.value);
    //            onChange(e.target.value);
    //         }}
    //     ></TextField>
    //   </Stack>
    // </Stack>
     <div className="search">
        <span className="search-span">
          Search {" "}
           <input
            className="table-input"
            value={value || ""}
            onChange={(e) => {
              setValue(e.target.value);
              onChange(e.target.value);
            }}
          />
        </span>
      </div>
  );
};

export default GlobalFilter;
