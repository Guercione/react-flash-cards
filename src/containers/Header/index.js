import React from "react";

// COMPONENTS
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  title: { flexGrow: 1 },
  link: { textDecoration: "none", color: "#FFFFFF" },
  fab: {
    height: 40
  },
  icon: {
    color: "#FFFFFF",
    marginRight: theme.spacing(1)
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>
            SITEJET CODE
          </Link>
        </Typography>
        <Link to="/new-list" className={classes.link}>
          <Fab
            edge="end"
            variant="extended"
            color="secondary"
            aria-label="add"
            className={classes.fab}
          >
            <AddBoxIcon className={classes.icon} />
            <Typography variant="body2">New List</Typography>
          </Fab>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
