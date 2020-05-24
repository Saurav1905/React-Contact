import React from "react";
import TextField from "@material-ui/core/TextField";
import SubProgram from "./sub-program";
import MenuItem from "@material-ui/core/MenuItem";
const countries = [
  {
    value: "DEF",
    label: "Select Program",
  },
  {
    value: "1",
    label: "Core UI",
  },
  {
    value: "2",
    label: "Backend",
  },
  {
    value: "3",
    label: "FullStack",
  },
  {
    value: "4",
    label: "DevOps",
  },
  {
    value: "5",
    label: "DataScience ML/AI",
  },
  {
    value: "6",
    label: "Digital Marketing",
  },
  {
    value: "7",
    label: "Cloud Computing",
  },
  {
    value: "8",
    label: "Cyber Security",
  },
  {
    value: "9",
    label: "ERP",
  },
  {
    value: "10",
    label: "IT certification",
  },
];
const Academy = () => {
  const [country, setCountry] = React.useState("DEF");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <React.Fragment>
      <h2 className="user-head">Academy Service</h2>
      <TextField
        className="max-width"
        id="standard-select-currency"
        select
        label="Program"
        value={country}
        onChange={handleChange}
      >
        {countries.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <SubProgram />
    </React.Fragment>
  );
};

export default Academy;
