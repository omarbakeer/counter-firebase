import React, { Component } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

class App extends Component {
  render() {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
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

export default App;
