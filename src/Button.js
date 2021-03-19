import React, { useState } from "react";

export default function FirstContainer({ text }) {
  return (
    <div>
      <button>{`${text}`}</button>
    </div>
  );
}
