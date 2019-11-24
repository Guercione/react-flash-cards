import React, { useState } from "react";

// COMPONENTS
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  title: {
    flexGrow: 1
  }
};

const sideList = (action, tabs) => (
  <List>
    {tabs.map((item, key) => (
      <ListItem
        button
        key={item.title + key}
        onClick={() => action(item.title)}
      >
        <ListItemText primary={item.title} />
      </ListItem>
    ))}
  </List>
);

const MenuTabs = ({ classes, action, tabs }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClickTab = tab => {
    setMenuOpen(false);
    action(tab);
  };

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenuOpen(open);
  };

  return (
    <>
      <IconButton
        variant="outlined"
        className={classes.menuButton}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Typography className={classes.title} />
      <h1>{menuOpen}</h1>
      <Drawer open={menuOpen} onClose={toggleDrawer(false)}>
        <div className={classes.list} role="presentation">
          {sideList(handleClickTab, tabs)}
        </div>
      </Drawer>
    </>
  );
};

export default withStyles(styles)(MenuTabs);
