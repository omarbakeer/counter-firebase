import React, { Component } from "react";
import * as firebase from "firebase";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class TimestampList extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  state = {
    timeStamps: []
  };

  componentDidMount = async () => {
    try {
      const arr = [];
      const snapshot = await firebase
        .database()
        .ref("timeStamps")
        .once("value");
      snapshot.forEach(child => {
        arr.push(child.val());
      });
      this.setState(() => ({ timeStamps: [...arr] }));
      console.warn(this.state.timeStamps);
    } catch (e) {
      console.warn(e);
    }
  };

  render() {
    const { timeStamps } = this.state;
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ margin: "30px 0 20px" }}
      >
        <Grid container justify="flex-start" style={{ width: "40vw" }}>
          <Button
            variant="outlined"
            onClick={() => this.props.history.push("/")}
            style={{ marginBottom: "20px" }}
          >
            <ArrowBack />
            Go to the App
          </Button>
        </Grid>
        <StyledCard>
          <List
            subheader={
              <ListSubheader
                color="primary"
                component="h1"
                style={{ fontSize: "28px" }}
              >
                Timestamp List
              </ListSubheader>
            }
          >
            {timeStamps.length > 0 ? (
              timeStamps.map((item, index) => (
                <ListItem key={index} selected={index % 2 === 0 ? true : false}>
                  <ListItemIcon>
                    <AccessTimeIcon />
                  </ListItemIcon>
                  <ListItemText>{item}</ListItemText>
                </ListItem>
              ))
            ) : timeStamps.length === 0 ? null : (
              <CircularProgress />
            )}
          </List>
        </StyledCard>
        <Typography style={{ marginTop: "30px" }}>Made by O.Bakier</Typography>
      </Grid>
    );
  }
}

const StyledCard = styled(Card)`
  && {
    width: 40vw;
    height: 100%;
  }
`;
