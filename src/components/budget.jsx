import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import UserExp from "./userexp";
const countries = [
  {
    value: "DEF",
    label: "Select Budget",
  },
  {
    value: "1",
    label: "50,000-1,00,000",
  },
  {
    value: "2",
    label: "1,00,000-1,50,000",
  },
  {
    value: "3",
    label: "1,50,000-2,00,000",
  },
  {
    value: "4",
    label: "2,00,000-2,50,000",
  },
  {
    value: "5",
    label: "2,50,000-3,00,000",
  },
  {
    value: "6",
    label: "3,00,000",
  },
];
const Budget = () => {
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
        label="Budget"
        value={country}
        onChange={handleChange}
      >
        {countries.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <UserExp />
    </React.Fragment>
  );
};

export default Budget;
