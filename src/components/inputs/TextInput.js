import React from "react";

// COMPONENTS
import { primary, error } from "../color";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = ({ breakpoints }) => ({
  input: {
    height: 50,
    width: 280,
    [breakpoints.up("sm")]: {
      width: 320
    },
    backgroundColor: "#ffffff",
    border: "2px solid " + primary,
    marginBottom: 0,
    borderRadius: 4,
    "&$error:after": {
      borderBottomColor: error
    },
    "&:after": {
      borderBottom: "2px solid " + primary
    }
  },
  labels: {
    "&$focusedLabel": {
      color: "#ffffff"
    },
    "&$erroredLabel": {
      color: error
    }
  },
  focusedLabel: {},
  erroredLabel: {},
  underline: {},
  error: {}
});

const TextInput = ({
  type,
  name,
  width,
  label,
  value,
  error,
  margin,
  classes,
  onFocus,
  required,
  onChange,
  disabled
}) => (
  <TextField
    label={label}
    name={name}
    onFocus={onFocus ? onFocus : () => {}}
    type={type ? type : "text"}
    value={value || ""}
    style={{ width: width, margin: margin ? margin : "10px 0" }}
    disabled={disabled ? true : false}
    onChange={disabled ? () => {} : onChange}
    required={required}
    variant="filled"
    error={error}
    InputLabelProps={{
      classes: {
        root: classes.labels,
        focused: classes.focusedLabel,
        error: classes.erroredLabel
      }
    }}
  />
);

export default withStyles(styles)(TextInput);
