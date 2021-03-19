import React, { useState } from "react";
import { render } from "react-dom";
import { Button } from "./Button";
const App = () => {
  //return React.createElement("h1", {}, "homepage");
  return (
    <div>
      <p className="codeText">Button text="Default" /</p>
      <Button text="Default" />
      <p className="codeText">
        Button text="Default" variant="outline" disableShadow /
      </p>
      <Button text="Default" variant="outline" disableShadow />
      <p className="codeText">Button text="Default" variant="text" /</p>
      <Button text="Default" variant="text" />
      <p className="codeText">Button text="Default" option="disabled" /</p>
      <Button text="Default" disabled />
      <p className="codeText">
        Button text="Default" variant="outline" disabled color="primary" /
      </p>
      <Button
        text="Default outline"
        variant="outline"
        disabled
        color="primary"
      />
      <p className="codeText">
        Button text="Default Text" variant="text" color="default" /
      </p>
      <Button text="Default Text" variant="text" color="default" />

      <p className="codeText">Button text="Primary" color="primary" /</p>
      <Button text="Primary" color="primary" />
      <p className="codeText">Button text="Default" color="default" /</p>
      <Button text="Default" color="default" disableShadow />
      <p className="codeText">Button text="Secondary" color="secondary" /</p>
      <Button text="Secondary" color="secondary" />
      <p className="codeText">Button text="Danger" color="danger" /</p>
      <Button text="Danger" color="danger" />

      <p className="codeText">
        Button text="Primary" color="primary" size="sm" /
      </p>
      <Button text="Primary" color="primary" size="sm" />
      <p className="codeText">
        Button text="Primary" color="primary" size="md" /
      </p>
      <Button text="Primary" color="primary" size="md" />
      <p className="codeText">
        Button text="Primary" color="primary" size="lg" /
      </p>
      <Button text="Primary" color="primary" size="lg" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
