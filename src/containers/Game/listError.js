import React from "react";

// COMPONENTS
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "../../components/inputs/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none"
  }
}));

const ListError = () => (
  <Grid container direction="column" alignItems="center">
    <Typography variant="h5">No listings found</Typography>
    <Link to="/" className={useStyles().link}>
      <Button style={{ marginTop: 10 }}>Back to home</Button>
    </Link>
  </Grid>
);

export default ListError;
