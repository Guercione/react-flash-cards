import React from "react";

// COMPONENTS
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "../../components/inputs/Button";
import Typography from "@material-ui/core/Typography";

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
          <img src="/images/baby-yoda.jpeg" alt="Baby Yoda" width="300px" />
          <Typography component="h5" variant="h5">
            Don't worry, baby Yoda will take care of it
          </Typography>
          <Typography variant="subtitle2">
            Baby Yoda said to click the button
          </Typography>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button style={{ marginTop: 10 }}>Back to home</Button>
          </Link>

          <Typography variant="subtitle2">
            Error: {this.state.errorInfo}
          </Typography>
        </Grid>
      );
    }

    return this.props.children;
  }
}
