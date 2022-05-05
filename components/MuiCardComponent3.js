import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const db3 = require("../assets/images/net1.jpg");

export default function MuiCardComponent2(props) {
  return (
    <Card sx={{ maxWidth: 500, height:225, marginRight:3 }}>
      <CardMedia component="img" alt="dc performance" height="80" image={db3} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {props.header}
        </Typography>
        <Typography variant="body3" color="text.secondary">
           {props.productivity}
        </Typography>
        <Divider />
        <Typography>
          <ArrowDownwardIcon sx={{width:"20px", color:"red"}}/>
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
