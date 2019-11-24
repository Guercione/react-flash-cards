import React from "react";

// COMPONENTS
import MuiSelect from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FilledInput from "@material-ui/core/FilledInput";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = ({ breakpoints }) => ({
  select: {
    borderRadius: 2,
    marginTop: 10,
    backgroundColor: "#ffffff",
    width: 283,
    color: "#000000",
    [breakpoints.up("sm")]: {
      width: 320
    },
    justifyContent: "center"
  }
});

const Select = ({
  name,
  label,
  value,
  width,
  error,
  classes,
  options,
  disabled,
  onChange
}) => {
  return (
    <FormControl variant="filled">
      {label && <InputLabel>{label}</InputLabel>}
      <MuiSelect
        error={error}
        className={classes.select}
        input={<FilledInput name={name} />}
        value={value || "No selected options"}
        disabled={(disabled || options.length <= 0) && true}
        onChange={onChange || console.error("Add an action")}
        style={{ fontSize: 20, width: width }}
      >
        {options.length > 0
          ? options.map(item => (
              <MenuItem key={item.id} value={item.id}>
                {item.value}
              </MenuItem>
            ))
          : "No items available"}
      </MuiSelect>
    </FormControl>
  );
};
export default withStyles(styles)(Select);
