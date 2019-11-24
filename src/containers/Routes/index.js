import React from "react";
import Loadable from "react-loadable";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
import Header from "../Header";
import Grid from "@material-ui/core/Grid";
import Loading from "../../components/Loading";
import { primary, secondary } from "../../components/color";
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
    fontFamily: "Texta",
    useNextVariants: true,
    subtitle1: {
      color: primary
    },
    body1: {
      color: "#000000"
    },
    body2: {
      color: "#FFFFFF"
    }
  }
});

const Routes = () => (
  <MuiThemeProvider theme={theme}>
    <Header />
    <Router>
      <Grid container justify="center">
        <Grid style={{ maxWidth: 1000, padding: "1em" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/word-list" component={Home} />
            <Route component={Error404} />
          </Switch>
        </Grid>
      </Grid>
    </Router>
  </MuiThemeProvider>
);

export default Routes;
