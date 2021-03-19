import React, { useState } from "react";
import { render } from "react-dom";
import Button from "./Button";
const App = () => {
  //return React.createElement("h1", {}, "homepage");
  return (
    <div>
      <Button text="Hello" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
