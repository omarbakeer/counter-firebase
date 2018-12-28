import React from "react";

const NotFound = props => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Ooops, Something Went Wrong</p>
      <button onClick={() => props.history.push("/")}>Back to home</button>
    </div>
  );
};

export default NotFound;
