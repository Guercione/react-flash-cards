import React from "react";

// REDUX
import { connect } from "react-redux";
import { setListSelectedCard } from "../../redux/actions/listAction";

// COMPONENTS
import { withRouter } from "react-router-dom";

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

const Home = ({ cards, location, setListSelectedCard }) => {
  const { noList } = useStyles();

  const setList = React.useCallback(() => setListSelectedCard(), [
    location.pathname
  ]);

  setList();

  const memoNoData = React.useMemo(() => {
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
  }, []);

  const memoCards = React.useMemo(() => {
    return cards.map((item, key) => (
      <Grid
        key={item.title + key}
        container
        justify="center"
        item
        xs={12}
        md={6}
      >
        <Card
          title={item.title}
          description={item.description}
          image={item.image}
          onClick={() => setListSelectedCard(key)}
        />
      </Grid>
    ));
  }, [cards]);

  return <Grid container>{cards.length ? memoCards : memoNoData}</Grid>;
};

const mapStateToProps = state => ({
  cards: state.list.cards
});

export default connect(mapStateToProps, { setListSelectedCard })(
  withRouter(Home)
);
