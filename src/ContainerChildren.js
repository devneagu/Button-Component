import React from "react";

const ContainerBackground = (el) => {
  return React.createElement(
    "div",
    {},
    React.createElement("img", {
      src: "background.svg",
      id: el.direction,
    })
  );
};

export default ContainerBackground;
