import React, { useEffect } from "react";

// REDUX
import { connect } from "react-redux";

// UTILS
import { getRandomRangeArray } from "../../utils/array";

// COMPONENTS

import Score from "./score";
import WordList from "./wordList";
import ListError from "./listError";
import WordInput from "./wordInput";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "../../components/inputs/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ProgressBar from "../../components/ProgressBar";

const useStyles = makeStyles(() => ({
  progressBar: {
    textAlign: "center",
    margin: "2em 0",
    width: "80vw",
    maxWidth: 650
  },
  words: {
    minHeight: 175
  },
  link: {
    textDecoration: "none"
  }
}));

const Game = ({ card, cardItems }) => {
  const [answeredWords, setAnsweredWords] = React.useState([]);
  const [words, setWords] = React.useState(getRandomRangeArray(cardItems));
  const progress = answeredWords.length * ((100 * 1) / words.length);
  const classes = useStyles();

  const handleResetWords = () => {
    setAnsweredWords([]);
    setWords(getRandomRangeArray(cardItems), 20);
  };

  const handleSubmit = item => {
    setAnsweredWords([...answeredWords, [...item]]);
  };

  return (
    <>
      <Grid container direction="column">
        <Grid>
          <Link to="/" className={classes.link}>
            Back to home
          </Link>
        </Grid>
        <Grid>
          <Typography variant="h5">{card.title}</Typography>
          <Typography variant="subtitle2">{card.description}</Typography>
        </Grid>
        <Grid container justify="center">
          <Grid className={classes.progressBar}>
            <ProgressBar value={progress} />
            <Typography variant="body1">
              Words: {answeredWords.length}/
              {words.length >= 20 ? 20 : words.length || 0}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {cardItems && cardItems.length ? (
        <Grid container alignItems="center" className={classes.words}>
          {answeredWords.length === words.length ||
          answeredWords.length === 20 ? (
            <Score
              words={words}
              answeredWords={answeredWords}
              handleResetWords={handleResetWords}
            />
          ) : (
            <WordInput
              card={words}
              currentCard={answeredWords.length ? answeredWords.length : 0}
              onSubmit={handleSubmit}
            />
          )}
          <WordList words={words} answeredWords={answeredWords} />
        </Grid>
      ) : (
        <ListError />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  card:
    state.list.selectedCard !== undefined
      ? state.list.cards[state.list.selectedCard]
      : {},
  cardItems:
    state.list.selectedCard !== undefined
      ? state.list.cards[state.list.selectedCard].items
      : []
});

export default connect(mapStateToProps, {})(Game);
