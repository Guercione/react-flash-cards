import React, { useEffect } from "react";

// REDUX
import { connect } from "react-redux";

// UTILS
import { getRandomRangeArray } from "../../utils/array";

// COMPONENTS
import Score from "./score";
import WordList from "./wordList";
import WordInput from "./wordInput";
import Grid from "@material-ui/core/Grid";
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
  }
}));

const Game = ({ card, cardItens }) => {
  const [answeredWords, setAnsweredWords] = React.useState([]);
  const [words, setWords] = React.useState(getRandomRangeArray(cardItens));

  const handleResetWords = () => {
    setAnsweredWords([]);
    setWords(getRandomRangeArray(cardItens), 20);
  };

  const handleSubmit = item => {
    setAnsweredWords([...answeredWords, [...item]]);
  };

  const classes = useStyles();

  return (
    <>
      <Grid container direction="column">
        <Grid>
          <Typography variant="h5">{card.title}</Typography>
          <Typography variant="subtitle2">{card.description}</Typography>
        </Grid>
        <Grid container justify="center">
          <Grid className={classes.progressBar}>
            <ProgressBar value={answeredWords.length * 5} />
            <Typography variant="body1">
              Words: {answeredWords.length}/
              {words.length >= 20 ? 20 : words.length || 0}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container alignItems="center" className={classes.words}>
        {answeredWords.length === words.length ||
        answeredWords.length === 20 ? (
          <Score answeres={answeredWords} handleResetWords={handleResetWords} />
        ) : (
          <WordInput
            card={words}
            currentCard={answeredWords.length ? answeredWords.length : 0}
            onSubmit={handleSubmit}
          />
        )}
        <WordList words={words} answeredWords={answeredWords} />
      </Grid>
    </>
  );
};

const mapStateToProps = state => ({
  card: state.list.cards[0],
  cardItens: state.list.cards[0].items
});

export default connect(mapStateToProps, {})(Game);
