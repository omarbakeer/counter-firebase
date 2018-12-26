import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div className="notfound-container">
        <h1>404</h1>
        <p>Ooops, Something Went Wrong</p>
        <button onClick={() => (window.location.href = "/")}>
          Back to home
        </button>
      </div>
    );
  }
}
