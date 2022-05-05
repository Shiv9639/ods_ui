import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 300,
  },
  indeterminateColor: {
    color: "#f50057",
  },
  selectAllText: {
    fontWeight: 500,
  },
  selectedAll: {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center",
  },
  variant: "menu",
};

const options = [
  "D003 DC Cambridge Maple Grove",
  "D004 DC Edmonton 121A Ave",
  "D006 DC Moncton Atlantic Freezer",
  "D010 DC Moncton",
  "D012 DC FORT Hamilton",
  "D014 DC Moncton Baig Blvd",
  "D015 DC St John's Clyde Ave",
  "D016 DC Ottawa Sheffield Rd",
  "D017 DC Brampton",
  "D020 DC Cornwall",
  "D021 DC Halifax Lakeside Dr",
  "D022 DC Calgary Northpoint",
  "D024 DC Moncton Caledonia",
  "D028 DC Aspect Logistics",
  "D030 DC Mississauga",
  "D031 DC Calgary Freeport Blvd",
  "D032 DC Pitt Meadows Loughheed Hwy",
  "D033 DC Outside Storage",
  "D034 DC Saskatchewan Fleming",
  "D035 DC Vancouver SE Marine Dr",
  "D037 DC Winnipeg Weston Rd",
  "D050 DC Calgary",
  "D057 DC Surrey 190th St",
  "D060 DC Ajax Bayly",
  "D061 DC Caledon Airport Rd",
  "D067 DC Boucherville Ch du Tremblay",
  "D070 DC Richmond",
  "D071 DC FORT Pane Fresco",
  "D072 DC Laval Francis-Hughes",
  "D080 DC Halton Hills",
];

export { useStyles, MenuProps, options };
