import React, { useState } from "react";

// COMPONENTS
import Tab from "@material-ui/core/Tab";
import MuiTab from "@material-ui/core/Tabs";
import withStyles from "@material-ui/core/styles/withStyles";

const Tabs = ({ classes, tabs, action, selectedTab }) => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <MuiTab
        value={action ? selectedTab : tabs[selected] && tabs[selected].title}
        onChange={(e, value) => (action ? action(value) : setSelected(value))}
        indicatorColor="primary"
      >
        {tabs &&
          tabs.map(item => (
            <Tab
              key={item.title}
              value={item.title}
              label={item.title.toUpperCase()}
            />
          ))}
      </MuiTab>
      {!action && !selectedTab && tabs[selected] && tabs[selected].component}
    </>
  );
};

export default withStyles(styles)(Tabs);
