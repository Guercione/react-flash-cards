import React from "react";

import CardMUI from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "1em 0",
    width: "100%",
    height: 95,
    [theme.breakpoints.up("md")]: {
      width: 450
    }
  },
  cardAction: {
    display: "flex",
    justifyContent: "space-between"
  },
  content: {
    maxWidth: 167,
    flex: "1 0 auto",
    [theme.breakpoints.up("md")]: {
      maxWidth: 267
    }
  },
  cover: {
    height: 95,
    width: 151
  }
}));

const Card = ({ title, description, image }) => {
  const classes = useStyles();

  return (
    <CardMUI className={classes.card}>
      <CardActionArea className={classes.cardAction}>
        <CardContent className={classes.content}>
          <Typography noWrap component="h5" variant="h5">
            {title || "No title"}
          </Typography>
          <Typography noWrap variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.cover}
          image={image || "/images/empty-image.png"}
          title={title || "Image"}
        />
      </CardActionArea>
    </CardMUI>
  );
};

export default Card;
