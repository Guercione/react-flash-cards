import React from "react";

// REDUX
import { connect } from "react-redux";
import {
  setListNewCard,
  setListEditCard,
  setListDeleteCard
} from "../../redux/actions/listAction";

// COMPONENTS
import ListItems from "./listItems";
import Grid from "@material-ui/core/Grid";
import { error } from "../../components/color";
import Divider from "@material-ui/core/Divider";
import { Link, Redirect } from "react-router-dom";
import Button from "../../components/inputs/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextInput from "../../components/inputs/TextInput";

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none"
  }
}));

const List = ({
  card,
  selectedCard,
  setListNewCard,
  setListDeleteCard,
  setListEditCard
}) => {
  const [title, setTitle] = React.useState({
    error: false,
    value: card ? card.title : ""
  });
  const [image, setImage] = React.useState({
    value: card && card.image ? card.image : ""
  });
  const [description, setDescription] = React.useState({
    error: false,
    value: card ? card.description : ""
  });
  const [list, setList] = React.useState(
    card && card.items.length
      ? card.items.map((item, key) => {
          return { id: key, word1: item[0], word2: item[1], error: false };
        })
      : [{ id: 0, word1: "", word2: "", error: false }]
  );
  const [redirectToHome, setredirectToHome] = React.useState(false);

  const classes = useStyles();

  const handleDelete = () => {
    setListDeleteCard(selectedCard);
    setredirectToHome(true);
  };

  const handleSubmit = () => {
    let flag = false;
    const arr = list;

    if (!title.value) return setTitle({ ...title, error: true });
    if (!description.value)
      return setDescription({ ...description, error: true });

    list.map((item, key) => {
      if (!item.word1 || !item.word2) {
        flag = true;
        arr[key] = { ...arr[key], error: true };
      }
    });

    if (flag) {
      setList([...list]);
      return;
    }

    if (card) {
      setListEditCard({
        id: selectedCard,
        title: title.value,
        description: description.value,
        imageUrl: image.value,
        items: list
      });
    } else {
      setListNewCard({
        title: title.value,
        description: description.value,
        imageUrl: image.value,
        items: list
      });
    }

    setredirectToHome(true);
  };

  return (
    <Grid container>
      {redirectToHome && <Redirect to="/" />}
      <Grid item xs={12}>
        <Link to="/" className={classes.link}>
          Back to home
        </Link>
      </Grid>
      <Grid container justify="space-between">
        <Typography variant="h4" color="primary">
          {card ? "Edit List" : "Add a new list"}
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
          onChange={e =>
            setDescription({ error: false, value: e.target.value })
          }
        />

        <TextInput
          name="image"
          label="Image URL"
          value={image.value}
          onChange={e => setImage({ error: false, value: e.target.value })}
        />
        <Divider />
      </Grid>
      <ListItems list={list} setList={setList} />
      <Grid container justify="flex-end">
        <Button onClick={handleSubmit} style={{ margin: "10px 10px 0 0" }}>
          {card ? "Save" : "Submit"}
        </Button>
        {card && (
          <Button
            onClick={handleDelete}
            style={{ marginTop: 10, backgroundColor: error }}
          >
            Delete
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  selectedCard: state.list.selectedCard,
  card:
    state.list.selectedCard !== undefined
      ? state.list.cards[state.list.selectedCard]
      : undefined
});

export default connect(mapStateToProps, {
  setListNewCard,
  setListEditCard,
  setListDeleteCard
})(List);
