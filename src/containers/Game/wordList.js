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

const typographyComponent = (ref, item, type = "", currentWord) => {
  const color = (function() {
    if (type === "error") return error;
    if (type === "warning") return warning;
    if (type === "success") return success;

    return grey;
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
      {item && item.length === 0 && `${ref + 1}. ???? - ????`}
      {item && item.length > 0 && `${ref + 1}. ${item[0]} - ${item[1]}`}
      {!item && `${ref + 1}. SKIPED`}
    </Typography>
  );
};

const WordList = ({ words, answeredWords }) => {
  const renderList = React.useMemo(() => {
    return words.map((item, key) => {
      if (answeredWords && answeredWords[key] && answeredWords.length === 20) {
        if (answeredWords[key][2] === "right")
          return typographyComponent(key, answeredWords[key], "success");

        if (answeredWords[key][2] === "wrong")
          return typographyComponent(key, answeredWords[key], "error");
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
