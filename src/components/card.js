import React from "react";
import { Link } from "react-router-dom";

import CardMUI from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none"
  },
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
  image: {
    height: 95,
    width: 151
  }
}));

const Card = ({ title, description, image }) => {
  const classes = useStyles();

  return (
    <CardMUI className={classes.card}>
      <Link to="/game" className={classes.link}>
        <CardActionArea className={classes.cardAction}>
          <CardContent className={classes.content}>
            <Typography noWrap component="h5" variant="h5" color="primary">
              {title || "No title"}
            </Typography>
            <Typography noWrap variant="subtitle1" color="textSecondary">
              {description}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.image}
            image={image || "/images/empty-image.png"}
            title={title || "Image"}
          />
        </CardActionArea>
      </Link>
    </CardMUI>
  );
};

export default Card;
