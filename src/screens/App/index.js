import React, { Component } from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Typography from "@material-ui/core/Typography";

export default class App extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      timer: 40,
      counter: 0,
      isTimerOn: false
    };
    this.timerInterval = null;
  }

  componentDidMount = async () => {
    try {
      const snapshot = await firebase
        .database()
        .ref("timeStamps")
        .once("value");
      this.setState(() => ({ counter: snapshot.numChildren() }));
    } catch (e) {
      console.warn(e);
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.timerInterval);
  };

  startTimer = () => {
    this.setState(() => ({ isTimerOn: true }));
    this.timerInterval = setInterval(() => {
      this.setState(prevState => ({
        timer: prevState.timer - 1
      }));
      if (this.state.timer === -1) {
        firebase
          .database()
          .ref("timeStamps")
          .push(new Date().toLocaleString());
        this.setState(prevState => ({
          timer: 39,
          counter: prevState.counter + 1
        }));
      }
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timerInterval);
    this.setState(() => ({ isTimerOn: false }));
  };

  clearCounterAndTimer = () => {
    firebase
      .database()
      .ref("timeStamps")
      .remove();
    clearInterval(this.timerInterval);
    this.setState(() => ({
      timer: 40,
      counter: 0,
      isTimerOn: false
    }));
  };

  render() {
    const { timer, counter, isTimerOn } = this.state;
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid container justify="center">
          <StyleButton
            variant="outlined"
            onClick={isTimerOn ? this.stopTimer : this.startTimer}
          >
            {isTimerOn ? "Pause" : "Start"}
          </StyleButton>
          <StyleButton variant="outlined" onClick={this.clearCounterAndTimer}>
            clear
          </StyleButton>
          <StyleButton
            variant="outlined"
            onClick={() => this.props.history.push("/list")}
          >
            Go to the list <ArrowForwardIcon />
          </StyleButton>
        </Grid>
        <StyledCard>
          <Grid
            container
            item
            direction="column"
            justify="center"
            alignItems="center"
            xs={6}
          >
            <CardHeader title="Timer" />
            <StyledNumber>{timer}</StyledNumber>
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
            <StyledNumber>{counter}</StyledNumber>
          </Grid>
        </StyledCard>
        <Typography style={{ marginTop: "30px" }}>Made by O.Bakier</Typography>
      </Grid>
    );
  }
}

const StyleButton = styled(Button)`
  && {
    margin: 16px;
    height: 20vh;
    width: 15vw;
  }
`;
const StyledCard = styled(Card)`
  && {
    display: flex;
    flex-direction: row;
    height: 50vh;
    width: 50vw;
  }
`;
const StyledNumber = styled(CardContent)`
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
