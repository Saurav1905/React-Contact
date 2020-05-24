import React from "react";
import TextField from "@material-ui/core/TextField";

import MenuItem from "@material-ui/core/MenuItem";
const countries = [
  {
    value: "DEF",
    label: "Select States",
  },
  {
    value: "DEL",
    label: "Delhi",
  },
  {
    value: "MUM",
    label: "Mumbai",
  },
  {
    value: "KOL",
    label: "Kolkata",
  },
  {
    value: "TM",
    label: "Tamil Nadu",
  },
  {
    value: "PUJ",
    label: "Punjab",
  },
];
const States = () => {
  const [country, setCountry] = React.useState("DEF");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <TextField
      className="max-width"
      id="standard-select-currency"
      select
      label="States"
      value={country}
      onChange={handleChange}
    >
      {countries.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default States;
