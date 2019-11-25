import React from "react";
import Loadable from "react-loadable";

// REDUX
import { connect } from "react-redux";

// COMPONENTS
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import Header from "../Header";
import Grid from "@material-ui/core/Grid";
import Loading from "../../components/Loading";
import { primary, secondary, grey } from "../../components/color";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

function loading({ error }) {
  if (error) {
    console.error(error);
    return "Error!";
  } else {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Loading full colored height="80px" width="80px" />
      </Grid>
    );
  }
}

const Home = Loadable({
  loader: () => import("../Home"),
  loading: loading
});

const Game = Loadable({
  loader: () => import("../Game"),
  loading: loading
});

const Error404 = Loadable({
  loader: () => import("../Errors/error404"),
  loading: loading
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    }
  },
  typography: {
    color: "secondary",
    fontFamily: "Texta",
    useNextVariants: true,
    subtitle1: {
      color: primary
    },
    subtitle2: {
      color: grey
    },
    body1: {
      color: "#000000"
    },
    body2: {
      color: "#FFFFFF"
    }
  }
});

const PrivateRoute = ({ condition, component, ...rest }) => {
  if (condition) {
    return <Route {...rest} component={component} />;
  }

  return <Redirect to="/" />;
};

const Routes = ({ selectedCard }) => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Header />
      <Grid container justify="center">
        <Grid style={{ maxWidth: 1000, padding: "1em" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute
              exact
              path="/game"
              condition={selectedCard !== undefined}
              component={Game}
            />
            <Route component={Error404} />
          </Switch>
        </Grid>
      </Grid>
    </Router>
  </MuiThemeProvider>
);

const mapStateToProps = state => ({
  selectedCard: state.list.selectedCard
});

export default connect(mapStateToProps, {})(Routes);
