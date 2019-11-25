import React from "react";

// COMPONENTS
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import { error } from "../../components/color";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextInput from "../../components/inputs/TextInput";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

const useStyles = makeStyles(theme => ({
  content: {
    marginTop: "2em"
  },
  title: {
    marginRight: "1em"
  },
  icon: {
    color: "#FFFFFF"
  },
  fabRemove: {
    marginRight: "1em",
    backgroundColor: error
  },
  fabAdd: {
    marginRight: "1em"
  },
  marginRight: {
    marginRight: "0",
    [theme.breakpoints.up("md")]: {
      marginRight: "1em"
    }
  }
}));

const ListItems = ({ list, setList }) => {
  const classes = useStyles();

  const handleInput = (event, ref, number) => {
    let arr = list;
    arr[ref] = {
      ...arr[ref],
      id: ref,
      [number]: event.target.value,
      error: false
    };
    setList([...arr]);
  };

  const addInput = () => {
    setList([...list, { id: list.length, word1: "", word2: "", error: false }]);
  };

  const removeInput = () => {
    let arr = list;
    arr = arr.pop();
    setList([...list]);
  };

  const renderInputText = () => {
    return (
      list &&
      list.map((item, key) => (
        <Grid container direction="row" item xs={12} key={`item-${key}`}>
          <Grid item xs={12} md="auto" className={classes.marginRight}>
            <Typography variant="subtitle2" color="primary">
              Word 1
            </Typography>
            <TextInput
              name={`item-${key}`}
              label="Word 1"
              error={item.error}
              value={item.word1}
              onChange={e => handleInput(e, key, "word1")}
            />
          </Grid>

          <Grid item xs={12} md="auto">
            <Typography variant="subtitle2" color="primary">
              Word 2
            </Typography>
            <TextInput
              name={`item-${key}`}
              label="Word 2"
              error={item.error}
              value={item.word2}
              onChange={e => handleInput(e, key, "word2")}
            />
          </Grid>
        </Grid>
      ))
    );
  };

  return (
    <Grid container className={classes.content}>
      <Typography variant="h5" color="primary" className={classes.title}>
        Items list
      </Typography>

      {renderInputText()}

      <Fab
        color="secondary"
        aria-label="add"
        className={classes.fabAdd}
        onClick={addInput}
      >
        <AddBoxIcon className={classes.icon} />
      </Fab>
      {list.length > 1 && (
        <Fab
          aria-label="add"
          className={classes.fabRemove}
          onClick={removeInput}
        >
          <RemoveCircleIcon className={classes.icon} />
        </Fab>
      )}
    </Grid>
  );
};

export default ListItems;
