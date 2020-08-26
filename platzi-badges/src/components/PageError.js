import React from "react";

function PageError(props) {
  return (
    <div className="container text-center my-5">
      <h1>Error: {props.error.message}</h1>
    </div>
  );
}

export default PageError;
