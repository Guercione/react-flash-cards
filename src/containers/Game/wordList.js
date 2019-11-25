import React from "react";

// COMPONENTS
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { error, warning, grey, success } from "../../components/color";

const useStyles = makeStyles(theme => ({
  content: {
    marginTop: "2em",
    [theme.breakpoints.up("sm")]: {
      height: 170
    }
  }
}));

const typographyComponent = (ref, item, type = "", correctWord) => {
  const color = (function() {
    if (type === "error" || type === "wrong" || type === "skipped")
      return error;
    if (type === "warning") return warning;
    if (type === "success" || type === "right") return success;

    return grey;
  })();

  const text = (function() {
    if (item && item.length === 0) return `${ref + 1}. ???? - ????`;
    if (item && item[1]) return `${ref + 1}. ${item[0]} - ${item[1]}`;
    if (item && correctWord)
      return `${ref + 1}. ${item[0]} - ${correctWord[1]} - SKIPPED`;

    return `${ref + 1}. ${item[0]} - ${item[1] || "SKIPPED"}`;
  })();

  return (
    <Typography
      noWrap
      key={ref}
      component="p"
      variant="body1"
      style={{
        color,
        maxWidth: 200
      }}
    >
      {text}
    </Typography>
  );
};

const WordList = ({ words, answeredWords }) => {
  const renderList = React.useMemo(() => {
    return words.map((item, key) => {
      if (
        answeredWords &&
        answeredWords[key] &&
        words.length === answeredWords.length
      ) {
        return typographyComponent(
          key,
          answeredWords[key],
          answeredWords[key][2],
          item
        );
      }

      if (answeredWords[key] && answeredWords[key].length)
        return typographyComponent(key, answeredWords[key], "warning");

      if (answeredWords[key] && !answeredWords[key].length)
        return typographyComponent(key, undefined, "error");

      return typographyComponent(key, []);
    });
  }, [answeredWords]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={useStyles().content}
    >
      {renderList}
    </Grid>
  );
};

export default WordList;
