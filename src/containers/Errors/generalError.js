import React from "react";

// COMPONENTS
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "../../components/inputs/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none"
  }
}));

export default class GeneralError extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { error: false, errorInfo: undefined };
  }

  static getDerivedStateFromError(error) {
    return { error: true, errorInfo: error };
  }

  render() {
    if (this.state.error) {
      return (
        <Grid container direction="column" alignItems="center">
          <img src="images/baby-yoda.png" alt="Baby Yoda" width="300px" />
          <Typography component="h5" variant="h5">
            Don't worry, baby Yoda will take care of it
          </Typography>
          <Typography component="subtitle2" variant="h5">
            Baby Yoda said to click the button
          </Typography>
          <Link to="/" className={useStyles().link}>
            <Button style={{ marginTop: 10 }}>Back to home</Button>
          </Link>

          <Typography component="subtitle2" variant="h5">
            Error: {this.state.errorInfo}
          </Typography>
        </Grid>
      );
    }

    return this.props.children;
  }
}
