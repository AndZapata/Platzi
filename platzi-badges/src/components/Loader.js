import React from "react";

function Loader() {
  return (
    <div className="container text-center my-5">
      <h1>This is a Loading state, please wait at least 3 seconds :v</h1>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div class="spinner-grow spinner-grow text-dark" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary my-3" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow spinner-grow text-info" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
