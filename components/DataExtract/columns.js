import { autocompleteClasses } from "@mui/material";
import { format } from "date-fns";
import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    disableFilters: true,
    sticky: "left",
  },
  {
    Header: "REFRESHTIME",
    Footer: "REFRESHTIME",
    accessor: "REFRESHTIME",
    width: 300,
    Cell: ({ value }) => {
       return format(new Date(value), "MM/dd/yyyy h:m a");
    },
   },

  {
    Header: "SAP_CRT_DTTM",
    Footer: "SAP_CRT_DTTM",
    accessor: "SAP_CRT_DTTM",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "SAP_CREATE_DT",
    Footer: "SAP_CREATE_DT",
    accessor: "SAP_CREATE_DT",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "SAP_CREATE_HR",
    Footer: "SAP_CREATE_HR",
    accessor: "SAP_CREATE_HR",
  
  },
  {
    Header: "WHSE",
    Footer: "WHSE",
    accessor: "WHSE",
  },
  {
    Header: "OD",
    Footer: "OD",
    accessor: "OD",
  },
  {
    Header: "WAC",
    Footer: "WAC",
    accessor: "WAC",
  },
  {
    Header: "ORD_TYPE",
    Footer: "ORD_TYPE",
    accessor: "ORD_TYPE",
  },
  {
    Header: "INC01",
    Footer: "INC01",
    accessor: "INC01",
  },
  {
    Header: "INC02",
    Footer: "INC02",
    accessor: "INC02",
  },
  {
    Header: "ROUTING_TEAM",
    Footer: "ROUTING_TEAM",
    accessor: "ROUTING_TEAM",
  },
  {
    Header: "ASD_INDICATOR",
    Footer: "ASD_INDICATOR",
    accessor: "ASD_INDICATOR",
  },
  {
    Header: "TMS_HOLD",
    Footer: "TMS_HOLD",
    accessor: "TMS_HOLD",
  },
  {
    Header: "TMS_OD",
    Footer: "TMS_OD",
    accessor: "TMS_OD",
  },
  {
    Header: "TMS_OD_CRT_DTTM",
    Footer: "TMS_OD_CRT_DTTM",
    accessor: "TMS_OD_CRT_DTTM",
  },
  {
    Header: "OD_IN_TMS",
    Footer: "OD_IN_TMS",
    accessor: "OD_IN_TMS",
  },
  {
    Header: "TMS_DALLAS_ROUTE",
    Footer: "TMS_DALLAS_ROUTE",
    accessor: "TMS_DALLAS_ROUTE",
  },
  {
    Header: "CARR_CD",
    Footer: "CARR_CD",
    accessor: "CARR_CD",
  },
  {
    Header: "TMS_STP_DTTM",
    Footer: "TMS_STP_DTTM",
    accessor: "TMS_STP_DTTM",
  },
  {
    Header: "LD_LEG_ID",
    Footer: "LD_LEG_ID",
    accessor: "LD_LEG_ID",
  },
  {
    Header: "OD_IN_WMS",
    Footer: "OD_IN_WMS",
    accessor: "OD_IN_WMS",
  },
  {
    Header: "WMS_OD_CREATE_DTTM",
    Footer: "WMS_OD_CREATE_DTTM",
    accessor: "WMS_OD_CREATE_DTTM",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "WMS_OD",
    Footer: "WMS_OD",
    accessor: "WMS_OD",
  },
  {
    Header: "WMS_ROUTE_PRESENT",
    Footer: "WMS_ROUTE_PRESENT",
    accessor: "WMS_ROUTE_PRESENT",
  },
];

// export const GROUPED_COLUMNS = [
//   {
//     Header: "Id",
//     Footer: "Id",
//     accessor: "id",
//   },
//   {
//     Header: "Name",
//     Footer: "Name",
//     columns: [
//       {
//         Header: "First Name",
//         Footer: "First Name",
//         accessor: "first_name",
//       },
//       {
//         Header: "Last Name",
//         Footer: "Last Name",
//         accessor: "last_name",
//       },
//     ],
//   },
//   {
//     Header: "Info",
//     Footer: "Info",
//     columns: [
//       {
//         Header: "Date Of Birth",
//         Footer: "Date Of Birth",
//         accessor: "date_of_birth",
//       },
//       {
//         Header: "Country",
//         Footer: "Country",
//         accessor: "country",
//       },
//       {
//         Header: "Phone",
//         Footer: "Phone",
//         accessor: "phone",
//       },
//     ],
//   },
// ];
