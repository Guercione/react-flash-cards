import React from "react";

// COMPONENTS
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "../../components/inputs/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none"
  }
}));

const SelectMode = () => (
  <Grid container direction="column">
    <Link to="/game" className={useStyles().link}>
      <Button color="primary" style={{ marginTop: 10 }}>
        Play
      </Button>
    </Link>
    <Link to="/list" className={useStyles().link}>
      <Button color="secondary" style={{ marginTop: 10 }}>
        Edit
      </Button>
    </Link>
  </Grid>
);

export default SelectMode;
