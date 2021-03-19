import React, { useState } from "react";

export const Button = (props) => {
  console.log(props);
  let { text, variant, color, size, disabled, disableShadow } = props;

  if (variant == undefined) variant = "";
  if (color == undefined) color = "";
  if (size == undefined) size = "";

  return (
    <div>
      <button
        className={`customBtn ${variant} ${color} ${size} ${
          disableShadow ? "disableShadow" : ""
        }`}
        disabled={disabled}
      >{`${text}`}</button>
    </div>
  );
};
