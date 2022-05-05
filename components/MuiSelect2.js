import * as React from "react";

import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ height: "600px", width: "50%", margin: "auto" }}>
      <Typography variant="subtitle1">Mui v5 default position :</Typography>
      <Box sx={{ margin: "8px 0px 24px 0px" }}>
        <FormControl fullWidth variant="standard">
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            id="demo-simple-select"
            labelId="demo-simple-select-label"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="standard-select-currency"
          label="This is TextField component"
          value={age}
          onChange={handleChange}
          fullWidth
          variant="standard"
          select
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </TextField>
      </Box>
      <Typography variant="subtitle1">
        If you want to make it like Mui v4 default position :
      </Typography>
      <Box sx={{ margin: "8px 0px 24px 0px" }}>
        <FormControl fullWidth variant="standard">
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            id="demo-simple-select"
            labelId="demo-simple-select-label"
            value={age}
            label="Age"
            onChange={handleChange}
            MenuProps={{
              anchorOrigin: {
                vertical: "center",
                horizontal: "center",
              },
              transformOrigin: {
                vertical: "center",
                horizontal: "center",
              },
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="standard-select-currency"
          label="This is TextField component"
          value={age}
          onChange={handleChange}
          fullWidth
          variant="standard"
          select
          SelectProps={{
            MenuProps: {
              anchorOrigin: {
                vertical: "center",
                horizontal: "center",
              },
              transformOrigin: {
                vertical: "center",
                horizontal: "center",
              },
            },
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </TextField>
      </Box>
    </Box>
  );
}
