import React from "react";

// COMPOENTS
import Loading from "../Loading";
import MuiButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    width: "90vw",
    height: 40,
    fontSize: 14,
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      width: 150,
      height: 50,
      fontSize: 14
    }
  },
  label: {
    color: "#FFFFFF"
  }
}));

const Button = ({ loading, children, ...rest }) => {
  const classes = useStyles();

  return (
    <MuiButton
      {...rest}
      color="secondary"
      variant="contained"
      classes={{
        root: classes.button,
        label: classes.label
      }}
    >
      {loading ? <Loading /> : children}
    </MuiButton>
  );
};
export default Button;
