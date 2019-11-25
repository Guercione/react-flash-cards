import React from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import Grid from "@material-ui/core/Grid";
import Button from "../../components/inputs/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { error, success, grey } from "../../components/color";

const useStyles = makeStyles(theme => ({
  seccess: {
    color: success
  },
  error: {
    color: error
  },
  title: {
    color: grey
  },
  link: {
    textDecoration: "none"
  },
  buttons: {
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
      maxWidth: 320
    }
  }
}));

const Score = ({ answeres, handleResetWords }) => {
  const classes = useStyles();

  const right = answeres.filter(item => item[2] === "right").length;

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      alignContent="center"
    >
      <Typography variant="h5" className={classes.title}>
        {right * 5}% of hit ratio
      </Typography>
      <Typography variant="h6" className={classes.error}>
        Wrong: {20 - right}
      </Typography>
      <Typography variant="h6" className={classes.seccess}>
        Correct: {right}
      </Typography>
      <Grid container className={classes.buttons}>
        <Button onClick={handleResetWords} style={{ marginTop: 10 }}>
          Try again
        </Button>

        <Link to="/" className={classes.link}>
          <Button style={{ marginTop: 10 }}>Back to home</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Score;
