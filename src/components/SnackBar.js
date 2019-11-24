import React from "react";

// COMPONENTS
import { error, success } from "./color";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import withStyles from "@material-ui/core/styles/withStyles";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const styles = {
  root: {
    backgroundColor: error
  },
  closeButton: {
    color: "#ffffff"
  }
};

const SnackBar = ({ open, type, message, classes, closeSnackBar }) => (
  <Snackbar
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left"
    }}
    open={open}
    variant="error"
    autoHideDuration={6000}
    onClose={closeSnackBar}
  >
    <SnackbarContent
      style={{ backgroundColor: type === "error" ? error : success }}
      message={<span>{message || "No message"}</span>}
      action={
        <Button className={classes.closeButton} onClick={closeSnackBar}>
          Fechar
        </Button>
      }
    />
  </Snackbar>
);

export default withStyles(styles)(SnackBar);
