import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const db1 = require("../assets/images/tec1.jpg");

export default function MuiCardComponent(props) {
  return (
    <Card sx={{ maxWidth: 500, height:225, marginRight:3 }}>
        {props.id }
         <CardMedia component="img" alt="dc performance" height="80" image={db1} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {props.header}
        </Typography>
        <Typography variant="body3" color="text.secondary">
           {props.productivity}
        </Typography>
        <Divider />
        <Typography>
          <ArrowUpwardIcon sx={{width:"20px", color:"green"}}/>
          {props.percentage} Since last week
        </Typography>
        <Divider />
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
