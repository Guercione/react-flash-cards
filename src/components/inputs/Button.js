import React from "react";

// COMPOENTS
import Loading from "../Loading";
import MuiButton from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import { error, greyDark, greyLight } from "../color";

const styles = ({ breakpoints }) => ({
  button: {
    width: 283,
    height: 57,
    border: "none",
    borderRadius: 2,
    justifyContent: "center",
    [breakpoints.up("sm")]: {
      width: 320
    }
  },
  label: {
    fontWeight: "bold",
    fontFamily: "Texta Bold"
  }
});

const Button = ({
  type,
  text,
  size,
  width,
  color,
  height,
  margin,
  loading,
  classes,
  onClick,
  fontSize,
  disabled,
  children,
  uncolored,
  autoFocus
}) => {
  const objBtnSize = () => {
    if (size === "xs") {
      return {
        width: 100,
        height: 40,
        fontSize: 14
      };
    }

    if (size === "md") {
      return {
        width: 150,
        height: 50,
        fontSize: 14
      };
    }

    return {
      width: width,
      height: height,
      fontSize: fontSize || 20
    };
  };

  const btnColor = () => {
    if (uncolored) return;
    if (color === "primary" || color === "secondary") return color;
    return "secondary";
  };

  const style = {
    color: color || greyDark,
    margin: margin,
    ...objBtnSize()
  };

  if (type === "error") {
    style.color = "#ffffff";
    style.backgroundColor = error;
  }

  if (disabled) {
    style.backgroundColor = greyLight;
  }

  return (
    <MuiButton
      variant="contained"
      autoFocus={autoFocus || false}
      color={btnColor()}
      onClick={disabled ? () => {} : onClick}
      style={style}
      classes={{
        root: classes.button,
        label: classes.label
      }}
    >
      {loading ? <Loading /> : children || text}
    </MuiButton>
  );
};
export default withStyles(styles)(Button);
