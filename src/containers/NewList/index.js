import React from "react";

// REDUX
import { connect } from "react-redux";
import { setListSelectedCard } from "../../redux/actions/listAction";

// COMPONENTS
import ListItems from "./listItems";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "../../components/inputs/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import TextInput from "../../components/inputs/TextInput";

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none"
  }
}));

const NewList = () => {
  const [title, setTitle] = React.useState({ error: false, value: "" });
  const [description, setDescription] = React.useState({
    error: false,
    value: ""
  });

  const [list, setList] = React.useState([
    { id: 0, word1: "", word2: "", error: false }
  ]);

  const classes = useStyles();

  const handleSubmit = () => {
    const arr = list;
    if (!title.value) setTitle({ ...title, error: true });
    if (!description.value) setDescription({ ...title, error: true });

    list.map((item, key) => {
      if (!item.word1 || !item.word2) arr[key] = { ...arr[key], error: true };
    });

    setList([...list]);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Link to="/" className={classes.link}>
          Back to home
        </Link>
      </Grid>
      <Grid container justify="space-between">
        <Typography variant="h4" color="primary">
          Add a new list
        </Typography>
      </Grid>
      <Grid container direction="column" item xs={12}>
        <TextInput
          name="title"
          label="List Title"
          error={title.error}
          value={title.value}
          onChange={e => setTitle({ error: false, value: e.target.value })}
        />
        <TextInput
          name="description"
          label="Description"
          error={description.error}
          value={description.value}
          onChange={e => setTitle({ error: false, value: e.target.value })}
        />
        <Divider />
      </Grid>
      <ListItems list={list} setList={setList} />
      <Grid container justify="flex-end">
        <Button onClick={handleSubmit} style={{ marginTop: 10 }}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default connect(null, {})(NewList);
