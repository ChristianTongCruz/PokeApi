import React from "react";

import "./Loading.css";

function Loading() {
  return (
    <div className="loading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
