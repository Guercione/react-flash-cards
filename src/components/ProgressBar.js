import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(theme => ({
  root: {
    height: 10
  },
  progressBar: {
    width: "100%"
  }
}));

const ProgressBar = ({ ...rest }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.progressBar}>
      <LinearProgress
        {...rest}
        variant="determinate"
        color="secondary"
        classes={{ root: classes.root }}
      />
    </Grid>
  );
};

export default ProgressBar;
