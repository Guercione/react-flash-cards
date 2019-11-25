import React from "react";

// COMPONENTS
import Grid from "@material-ui/core/Grid";
import { error } from "../../components/color";
import Button from "../../components/inputs/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextInput from "../../components/inputs/TextInput";

const useStyles = makeStyles(theme => ({
  buttons: {
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
      maxWidth: 320
    }
  }
}));

const WordInput = ({ card, currentCard, onSubmit }) => {
  const [state, setState] = React.useState({ input: "" });
  const { buttons } = useStyles();

  const handleSubmit = () => {
    setState({ input: "" });
    onSubmit(
      state.input && card[currentCard] && card[currentCard][0]
        ? [
            card[currentCard][0],
            state.input,
            card[currentCard][1].toLowerCase() === state.input.toLowerCase()
              ? "right"
              : "wrong"
          ]
        : [card[currentCard][0], "", "wrong"]
    );
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Typography component="p" variant="h4" color="primary">
        {card[currentCard] && card[currentCard][0]
          ? card[currentCard][0]
          : "Error"}
      </Typography>
      <TextInput
        name="Meaning"
        label="Write here..."
        value={state.input}
        onChange={e => setState({ input: e.target.value })}
        onKeyPress={e => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <Grid container className={buttons}>
        <Button
          onClick={() => onSubmit([])}
          style={{ backgroundColor: error, marginTop: 10 }}
        >
          Skip
        </Button>
        <Button onClick={handleSubmit} style={{ marginTop: 10 }}>
          {currentCard === card.length - 1 ? "Finish" : "Submit"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default WordInput;
