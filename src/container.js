import React, { useState } from "react";
import ContainerBackground from "./ContainerChildren";

const Container = () => {
  return React.createElement("div", { className: "flex-container" }, [
    React.createElement("div", { key: "1" }, [
      React.createElement("span", {
        id: "codeIcon",
        key: 42352,
      }),
      <ContainerBackground key="43" direction="up" />,
    ]),
    React.createElement("div", { key: "2" }, [
      React.createElement("span", {
        id: "codeIcon",
        key: 22,
      }),
      <ContainerBackground key="65" direction="right" />,
    ]),
    React.createElement("div", { key: "3" }, [
      React.createElement("span", {
        id: "codeIcon",
        key: 33,
      }),
      <ContainerBackground key="655" direction="right-down" />,
    ]),
    React.createElement("div", { key: "4" }, [
      React.createElement("span", {
        id: "codeIcon",
        key: 44,
      }),
      <ContainerBackground key="656" direction="left" />,
    ]),
    React.createElement("div", { key: "5" }, [
      React.createElement("span", {
        id: "codeIcon",
        key: 34,
      }),
      <ContainerBackground key="543" direction="down" />,
    ]),
  ]);
};

export default Container;
