import React, { useState, useMemo } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import "../assets/css/main.css";
import Select from "react-select";

import {
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddTaskSharpIcon from "@mui/icons-material/AddTaskSharp";
import DataObjectIcon from "@mui/icons-material/DataObject";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import CancelScheduleSendIcon from "@mui/icons-material/CancelScheduleSend";

import { useNavigate } from "react-router-dom";
import { Box, Stack, Paper, Grid } from "@mui/material";
import ExtractTable from "./DataExtract/ExtractTable";
import MOCK_DATA from "./DataExtract/MOCK_DATA.json";
import { ExportToCsv } from "export-to-csv";

const useStyles = makeStyles((theme) => ({
  palette: {
    primary: "#8bc34a",
    secondary: "#e6ee9c",
  },
  grow: {
    flexGrow: 1,
  },
  app_bar: {
    position: "absolute",
    maxWidth: 225,
    background:
      "linear-gradient(to right, rgb(187, 188, 188), rgb(151, 153, 155))",
    color: "white",
    fontVariant: "bold",

    [theme.breakpoints.up("sm")]: {
      top: "24%",
      left: "5.4%",
      transform: "translate(-50%, 0)",
    },
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: "space-between",
  },
  hide: {
    display: "none",
  },
  modal: {
    paddingRight: 500,
  },
  drawer: {
    minWidth: 100,
    width: "20%",
    flexShrink: 0,
  },
  drawerPaper: {
    marginTop: 224,
    minWidth: 100,
    width: "11.5%",
    position: "absolute",
    right: "12%",
    height: "70%",
    background: "#bdbdbd",
    borderRadius: 10,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  listItem: {
    fontSize: 12,
    fontWeight: 800,
  },
  listIcon: {
    color: "#7cb342",
  },
  select: {
    color: "#fff",
    fontWeight: 600,
  },
}));



function DataMainSummery() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  //const data = './DataExtract/data.json';
  const [selectedOption, setSelectedOption] = useState("1234");

  const options = [
    { value: "1", label: "04-14-2022 10:06:08 AM" },
    { value: "2", label: "04-14-2022 10:06:08 AM" },
    { value: "3", label: "04-14-2022 10:06:08 AM" },
  ];
 const data = useMemo(() => MOCK_DATA, []);
 
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickSummery = () => {
    navigate("/dataextractsummerymain");
  };

  const handleClickData = () => {
    navigate("/dataextractdatamain");
  };
  const handleClickNI = () => {
    alert("Work in progress..");
  };
  const handleDownload = () => {
     const csvExporter = new ExportToCsv(optionscsv);
     return csvExporter.generateCsv(data);
  };

const optionscsv = {
  fieldSeparator: ",",
  quoteStrings: '"',
  decimalSeparator: ".",
  showLabels: true,
  showTitle: true,
  title: "json to Excel",
  useTextFile: false,
  useBom: true,
  useKeysAsHeaders: true,
  filename: 'DC_Data'
  // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
};

  const renderDrawer = (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          container: document.getElementById("appContainerDiv"),
          style: { position: "absolute" },
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            Pages
            {theme.direction === "ltl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>

        <ListItem button onClick={handleClickSummery}>
          <ListItemIcon className={classes.listIcon}>
            {<DomainAddIcon />}
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItem }}
            primary={"SUMMARY"}
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClickData}>
          <ListItemIcon className={classes.listIcon}>
            {<DataObjectIcon />}
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItem }}
            primary={"DATA"}
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClickNI}>
          <ListItemIcon className={classes.listIcon}>
            {<AutoModeIcon />}
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItem }}
            primary={"OD NOT IN TM"}
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClickNI}>
          <ListItemIcon className={classes.listIcon}>
            {<TravelExploreIcon />}
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItem }}
            primary={"UNPLANNED IN TM"}
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClickNI}>
          <ListItemIcon className={classes.listIcon}>
            {<AddTaskIcon />}
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItem }}
            primary={"OD NOT IN WM"}
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClickNI}>
          <ListItemIcon className={classes.listIcon}>
            {<CancelScheduleSendIcon />}
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItem }}
            primary={"OD UNPLANNED IN WM"}
          />
        </ListItem>

        <Divider />
        <ListItem button onClick={handleDownload}>
          <ListItemIcon className={classes.listIcon}>
            {<CancelScheduleSendIcon />}
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItem }}
            primary={"DOWNLOAD DATA"}
          />
        </ListItem>
        <Divider />
      </Drawer>
    </React.Fragment>
  );

  return (
    <div className="main-container next">
      <div className="flex-item-1">
        <div className={classes.grow}>
          <AppBar className={classes.app_bar}>
            <Toolbar className={classes.toolbar}>
              <Typography variant="h5" noWrap className={classes.title}>
                Data Extract
              </Typography>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          {renderDrawer}
        </div>
      </div>
      <div className="flex-item-22">
        <div className="white-paper-main-extract">
          <div className="extract-header">
            <div className="de-item">
              <p className="label-de">WHSE</p>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder="WHSE"
              />
            </div>

            <div className="de-item">
              <p className="label-de">SAP_CREATE_DT</p>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder="SAP_CREATE_DT"
              />
            </div>

            <div className="de-item">
              <p className="label-de">SAP_CREATE_HR</p>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder="SAP_CREATE_HR"
              />
            </div>

            <div className="de-item">
              <p className="label-de">ROUNTING_TEAM</p>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder="ROUNTING_TEAM"
              />
            </div>

            <div className="de-item">
              <p className="label-de">OD_IN_TMS</p>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder="OD_IN_TMS"
              />
            </div>

            <div className="de-item">
              <p className="label-de">TMS LOAD ID</p>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder="TMS LOAD ID"
              />
            </div>

            <div className="de-item">
              <p className="label-de">OD_IN_WMS</p>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder="OD IN WMS"
              />
            </div>

            <div className="de-item">
              <p className="label-de">WM_ROUTE_PRESENT</p>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder="WM_ROUTE_PRESENT"
              />
            </div>
          </div>
          {/* table content */}
          <div className="FixedHeightContainer">
            <div className="extract-table-data">
              <ExtractTable />
            </div>
          </div>
          {/* <h4 className="middle-h4">Data Extract content goes here</h4> */}
        </div>
      </div>

      <div className="flex-item-3"></div>
    </div>
  );
}

export default DataMainSummery;
