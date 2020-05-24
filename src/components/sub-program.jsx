import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
const countries = [
  {
    value: "DEF",
    label: "Select SubProgram",
  },
  {
    value: "1",
    label: "Advanced UI",
  },
  {
    value: "2",
    label: "Angular JS",
  },
  {
    value: "3",
    label: "React JS",
  },
  {
    value: "4",
    label: "Vue JS",
  },
  {
    value: "5",
    label: "Java",
  },
  {
    value: "6",
    label: ".Net",
  },
  {
    value: "7",
    label: "Node JS",
  },
  {
    value: "8",
    label: "Ruby",
  },
  {
    value: "9",
    label: "Python",
  },
  {
    value: "10",
    label: "Core JAVA",
  },
  {
    value: "11",
    label: "Advanced Java",
  },
  {
    value: "12",
    label: "MEAN",
  },
  {
    value: "13",
    label: "MERN",
  },
  {
    value: "14",
    label: "MEVN",
  },
];

const SubProgram = () => {
  const [country, setCountry] = React.useState("DEF");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <TextField
      className="max-width"
      id="standard-select-currency"
      select
      label="Sub-Program"
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

export default SubProgram;
