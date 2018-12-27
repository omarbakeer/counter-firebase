import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Typography from "@material-ui/core/Typography";

class App extends Component {
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid container justify="center">
          <Button
            // onClick={() => this.props.history.push("/list")}
            style={{ height: "20vh", width: "15vw" }}
          >
            Pause
          </Button>
          <Button
            // onClick={() => this.props.history.push("/list")}
            style={{ height: "20vh", width: "15vw" }}
          >
            clear
          </Button>
          <Button
            onClick={() => this.props.history.push("/list")}
            style={{ height: "20vh", width: "20vw" }}
          >
            Go to the list <ArrowForwardIcon />{" "}
          </Button>
        </Grid>
        <Card
          style={{
            display: "flex",
            flexDirection: "row",
            height: "50vh",
            width: "50vw"
          }}
        >
          <Grid
            container
            item
            direction="column"
            justify="center"
            alignItems="center"
            xs={6}
          >
            <CardHeader title="Timer" />
            <StyledContent>40</StyledContent>
          </Grid>
          <Pipe />
          <Grid
            container
            item
            direction="column"
            justify="center"
            alignItems="center"
            xs={6}
          >
            <CardHeader title="Counter" />
            <StyledContent>5</StyledContent>
          </Grid>
        </Card>
        <Typography style={{ marginTop: "30px" }}>
          Made by Omar Bakier
        </Typography>
      </Grid>
    );
  }
}

const StyledContent = styled(CardContent)`
  && {
    font-size: 112px;
  }
`;
const Pipe = styled.div`
  && {
    width: 3px;
    height: 80%;
    background: black;
    margin: auto;
  }
`;

export default withRouter(App);
