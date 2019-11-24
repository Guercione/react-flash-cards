import React from "react";

import Card from "../../components/card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  noList: {
    height: "calc(100vh - 100px)",
    textAlign: "center"
  }
}));

const Cards = () => {
  return data.map(item => (
    <Grid container justify="center" item xs={12} md={6}>
      <Card
        title={item.title}
        description={item.description}
        image={item.image}
      />
    </Grid>
  ));
};

const NoData = () => {
  const { noList } = useStyles();

  return (
    <Grid container direction="column" justify="center" className={noList}>
      <Typography component="h5" variant="h5">
        You have no created list
      </Typography>
      <Typography component="h6" variant="h6">
        Click in "New List" to create a new one
      </Typography>
    </Grid>
  );
};

const Home = () => {
  return <Grid container>{data.length ? Cards() : NoData()}</Grid>;
};

export default Home;

const data = [
  {
    title: "Title",
    image: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.s"
  },
  {
    title: "Title",
    image: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.s"
  },
  {
    title: "Title",
    image: "",
    description: ""
  },
  {
    title: "English/Germany",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_the_United_States_and_Germany.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.s"
  }
];
