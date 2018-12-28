import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./screens/App";
import TimestampList from "./screens/List";
import NotFound from "./screens/NotFound404";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/list" component={TimestampList} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
