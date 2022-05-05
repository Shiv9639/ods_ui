import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const TestAPI = () => {
  //const apiDC = "http://localhost:5000/dcname";
  const apiDC =
    "https://scs-generic-query-api-scs-dv.apps.ltosp4lwr.osp.ngco.com/api/generic-query-api";
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dcParams, setDCParams] = useState(["D030", "D010", "D020", "D050"]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await axios
        .get(apiDC, {
          params: {
            value: dcParams,
          },
          headers: { "Content-Type": "applicaton/json" },
        })

        .then((res) => {
          setApiData(res.data);
          console.log("data", apiData);
        });
      setLoading(false);
    } catch (e) {
     console.log(expect)
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
        <div>
       {loading ? (
         <div className="loadingCenter">
           <Box sx={{ display: "flex" }}>
             <CircularProgress />
           </Box>
         </div>
       ) : (

         <h2>Loaded</h2>
  )
       }
  </div>
  )
}

export default TestAPI