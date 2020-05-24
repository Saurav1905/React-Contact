import React from "react";
import TextField from "@material-ui/core/TextField";

import MenuItem from "@material-ui/core/MenuItem";
const countries = [
  {
    value: "DEF",
    label: "Select Your Experience",
  },
  {
    value: "1",
    label: "IT",
  },
  {
    value: "2",
    label: "NON-IT",
  },
];
const UserExp = () => {
  const [country, setCountry] = React.useState("DEF");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <React.Fragment>
      <TextField
        className="max-width"
        id="standard-select-currency"
        select
        label="Experience"
        value={country}
        onChange={handleChange}
      >
        {countries.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </React.Fragment>
  );
};

export default UserExp;
