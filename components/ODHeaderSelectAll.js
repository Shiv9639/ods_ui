import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/odmonitoring.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { MenuProps, useStyles, options } from "./utils";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {format} from 'date-fns'

const ODHeader = () => {

  const apiDC = "http://localhost:5000/dcname";
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(apiDC)
      .then((res) => {
         setApiData(res.data);
         console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const defaultValues = {
    name: "",
    dcnames: "",
    age: 0,
  };
  const [formValues, setFormValues] = useState(defaultValues);

  const formOnSubmit = (event) => {
    event.preventDefault();
    console.log("date", formValues.date);
    console.log("formvalues", formValues);
    console.log("selected", selected);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const isAllSelected =
    options.length > 0 && selected.length === options.length;

  const handleChanges = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    setSelected(value);
  };

  let dcs = [];
  for (let i = 0; i < selected.length; i++) {
    dcs.push(selected[i].substr(0, 4));
  }
  
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  const processDate = formatDate(formValues.date);

 let DataArray = [];
 dcs.forEach((dc) => {
    apiData.forEach((ap)=> {
      if(dc === ap.DCName){
         DataArray.push(ap)
      }
    })
 })
 
// const dt = new Date()
const today = format(new Date(),'yyyy-MM-dd')

console.log("processDate", processDate)
console.log("today", today)
// console.log("dataArray", DataArray)

  return (
    <>
      <div className="ODHeader-container">
        <div className="content odm">OD Monitoring</div>
        <form className="frmOdm" onSubmit={formOnSubmit}>
          <div className="content odm-block2">
            <TextField
              id="date"
              name="date"
              label="CREATE DATE"
              type="date"
              defaultValue={today}
              // sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              value={formValues.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="content odm-block3">
            <FormControl className={classes.formControl}>
              <InputLabel variant="outlined" id="mutiple-select-label">
                Select DCs
              </InputLabel>
              <Select
                labelId="mutiple-select-label"
                multiple
                value={selected}
                onChange={handleChanges}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                variant="outlined"
              >
                <MenuItem
                  value="all"
                  classes={{
                    root: isAllSelected ? classes.selectedAll : "",
                  }}
                >
                  <ListItemIcon>
                    <Checkbox
                      classes={{ indeterminate: classes.indeterminateColor }}
                      checked={isAllSelected}
                      indeterminate={
                        selected.length > 0 && selected.length < options.length
                      }
                    />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.selectAllText }}
                    primary="Select All"
                  />
                </MenuItem>
                {options.map((option) => (
                  <MenuItem key={option} value={option}>
                    <ListItemIcon>
                      <Checkbox checked={selected.indexOf(option) > -1} />
                    </ListItemIcon>
                    <ListItemText primary={option} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="content odm-block4">
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>

      <div className="DCHeader-main">
        <div className="DCHeader-container">
          {dcs.map((value, index) => {
            return (
              <div key={index} className="dc-content dc-odm">
                {value}
              </div>
            );
          })}
        </div>
       

        <div className="SAPHeader-container">
          {DataArray.map((data) =>
             data.date === formValues.date ? (
              <div className="sap-content sap-odm">
                <p className="p-sap-hd">SAP OD'S RELEASED</p>
                <p className="p-sap-nr">
                  {data.OD_IN_SAP === null ? "(Blank)" : data.OD_IN_SAP}
                </p>
              </div>
            ) : (
              <div className="sap-content sap-odm-na">
                <p className="p-sap-na">Data Not Available</p>
              </div>
            )
          )}
        </div>

        <div className="WMSHeader-container">
          {DataArray.map((data) => {
            return data.date === formValues.date ? (
              <>
                <div className="wms-content wms-odm">
                  <p className="w-sap-hd">IN WMS</p>
                  <p className="w-sap-nr">
                    {data.OD_IN_WMS === null ? "(Blank)" : data.OD_IN_WMS}
                  </p>
                </div>
                <div className="wms-content wms-odm wms-ev-color">
                  <p className="w-sap-hd">NOT IN WMS</p>
                  <p className="w-sap-nr">
                    {data.OD_NOT_IN_WMS === null
                      ? "(Blank)"
                      : data.OD_NOT_IN_WMS}
                  </p>
                </div>
              </>
            ) : (
              <div className="sap-content sap-odm-na">
                <p className="p-sap-na">Blank</p>
              </div>
            );
          })}
        </div>

        {/* 2nd row */}
        <div className="WMSHeader-container">
          {DataArray.map((data) => {
             return data.date === formValues.date ? (
              <>
                <div className="wms-content wms-odm">
                  <p className="w-sap-hd">IN TMS</p>
                  <p className="w-sap-nr">
                    {data.OD_IN_TMS === null ? "(Blank)" : data.OD_IN_TMS}
                  </p>
                </div>
                <div className="wms-content wms-odm wms-ev-color">
                  <p className="w-sap-hd">NOT IN TMS</p>
                  <p className="w-sap-nr">
                    {data.OD_NOT_IN_TMS === null
                      ? "(Blank)"
                      : data.OD_NOT_IN_TMS}
                  </p>
                </div>
              </>
               ) : (
              <div className="sap-content sap-odm-na">
                <p className="p-sap-na">Blank</p>
              </div>
            );
          })}
        </div>

        {/* 3rd row */}
        <div className="WMSHeader-container">
          {DataArray.map((data) => {
            return data.date === formValues.date ? (
              <>
                <div className="wms-content wms-odm">
                  <p className="w-sap-hd">PLANNED IN TMS</p>
                  <p className="w-sap-nr">
                    {data.OD_PLANNNED_IN_TMS === null
                      ? "(Blank)"
                      : data.OD_PLANNNED_IN_TMS}
                  </p>
                </div>
                <div className="wms-content wms-odm wms-ev-color">
                  <p className="w-sap-hd">UNPLANNED IN TMS</p>
                  <p className="w-sap-nr">
                    {data.OD_NOT_PLANNED_IN_TMS === null
                      ? "(Blank)"
                      : data.OD_NOT_PLANNNED_IN_TMS}
                  </p>
                </div>
              </>
            ) : (
              <div className="sap-content sap-odm-na">
                <p className="p-sap-na">Blank</p>
              </div>
            );
          })}
        </div>

        {/* 4th row */}
        <div className="WMSHeader-container">
          {DataArray.map((data) => {
            return data.date === formValues.date ? (
              <>
                <div className="wms-content wms-odm">
                  <p className="w-sap-hd">PLANNED IN WMS</p>
                  <p className="w-sap-nr">
                    {data.WM_ROUTE_PRESENT === null
                      ? "(Blank)"
                      : data.WM_ROUTE_PRESENT}
                  </p>
                </div>
                <div className="wms-content wms-odm wms-ev-color">
                  <p className="w-sap-hd">UNPLANNED IN WMS</p>
                  <p className="w-sap-nr">
                    {data.WM_ROUTE_NOT_PRESENT === null
                      ? "(Blank)"
                      : data.WM_ROUTE_NOT_PRESENT}
                  </p>
                </div>
              </>
            ) : (
              <div className="sap-content sap-odm-na">
                <p className="p-sap-na">Blank</p>
              </div>
            );
          })}
        </div>
      </div>

      </>
  );
};

export default ODHeader;
