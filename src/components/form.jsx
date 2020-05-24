import React from "react";
import Academy from "./academy";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import IT from "./IT";
import Button from "@material-ui/core/Button";
import UserInfo from "./userinfo";

const Form = () => {
  return (
    <React.Fragment>
      <Container className="container">
        <h2 className="header">Caramel Service</h2>
        <h3>Contact Us</h3>
        <Grid container spacing={3}>
          <UserInfo></UserInfo>
          <Grid item xs={6}>
            <Academy />
            <IT />
          </Grid>
        </Grid>
        <Button className="button" variant="contained" color="primary">
          Submit form
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default Form;
