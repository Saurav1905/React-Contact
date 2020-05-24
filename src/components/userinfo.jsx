import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import States from "./states";
const countries = [
  {
    value: "DEF",
    label: "Select Country",
  },
  {
    value: "IND",
    label: "India",
  },
  {
    value: "US",
    label: "USA",
  },
  {
    value: "UK",
    label: "UK",
  },
  {
    value: "AUS",
    label: "Australia",
  },
  {
    value: "GER",
    label: "Germany",
  },
];
const UserInfo = () => {
  const [country, setCountry] = React.useState("DEF");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <Grid item xs={6}>
      <h2 className="user-head">User information</h2>
      <form className="form-field" noValidate autoComplete="off">
        <TextField
          className="max-width"
          required
          id="filled-required"
          label="Fullname"
          variant="outlined"
        />

        <TextField
          className="max-width"
          required
          id="filled-required"
          label="Email"
          variant="outlined"
        />

        <TextField
          className="max-width"
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          className="max-width"
          id="standard-select-currency"
          select
          label="Country"
          value={country}
          onChange={handleChange}
        >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <States className="max-width" />
        <TextField
          className="max-width"
          required
          id="filled-required"
          label="Zip"
          variant="outlined"
        />
      </form>
    </Grid>
  );
};

export default UserInfo;
