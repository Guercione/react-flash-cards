import React from "react";

import Card from "../../components/Card";
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
    <Grid container justify="center" key={item.title} item xs={12} md={6}>
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
    title: "Portuguese/Germany",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-aijEIDQtY5rE0kh5szpQ6kec8g3P-cFYBx4vFg0LVcfR96jp",
    description: "Verbs list in Portuguese to German"
  },
  {
    title: "English/Germany",
    image:
      "https://steemitimages.com/p/4qEixipsxSf25mGYKwnJMdnGEB67ASMcmmkyYu49eDZA8SnSEwKRSMUyziM3kHnNY6?format=match&mode=fit",
    description: "Food list in English to German"
  },
  {
    title: "English/Germany",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_the_United_States_and_Germany.png",
    description: "Vocabulary list in English to German"
  },
  {
    title: "Portuguese/English",
    image: "",
    description: "General vocabulary list in English to German"
  }
];
