import React from "react";

// COMPONENTS
import { secondary, error } from "../color";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  input: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 320
    }
  },
  labels: {},
  focusedLabel: {},
  erroredLabel: {},
  underline: {},
  error: {}
}));

const TextInput = ({ type, margin, onFocus, onChange, ...rest }) => {
  const classes = useStyles();

  return (
    <TextField
      {...rest}
      color="secondary"
      variant="outlined"
      onFocus={onFocus}
      onChange={onChange}
      type={type ? type : "text"}
      style={{ margin: margin ? margin : "10px 0" }}
      classes={{
        root: classes.input
      }}
    />
  );
};

export default TextInput;
