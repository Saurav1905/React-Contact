import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Budget from "./budget";
const countries = [
  {
    value: "DEF",
    label: "Select Services",
  },
  {
    value: "1",
    label: "Mobile App",
  },
  {
    value: "2",
    label: "Web Development",
  },
  {
    value: "3",
    label: "Digital Marketing",
  },
  {
    value: "4",
    label: "DevOps",
  },
  {
    value: "5",
    label: "Python Development",
  },
];
const IT = () => {
  const [country, setCountry] = React.useState("DEF");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <React.Fragment>
      <h2 className="user-head">IT Service</h2>

      <TextField
        className="max-width"
        id="standard-select-currency"
        select
        label="Services"
        value={country}
        onChange={handleChange}
      >
        {countries.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Budget />
    </React.Fragment>
  );
};

export default IT;
