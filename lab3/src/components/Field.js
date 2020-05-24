import React, { useRef } from "react";

export const Field = ({ handleChange }) => {
  const ref = useRef();

  return (
    <div onInput={handleChange} ref={ref} id="field" contentEditable="true">
      hello there text
    </div>
  );
};
