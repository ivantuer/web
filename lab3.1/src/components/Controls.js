import React from "react";
import { useWYSIWYGHelper } from "../helpers/WYSIWYG";

export const Controls = () => {
  const wysiwyg = useWYSIWYGHelper();
  return (
    <div className="action-bar">
      <button onClick={wysiwyg.bold} className="bold-btn action-bar-btn">
        <i className="fas fa-bold"></i>
      </button>
      <button onClick={wysiwyg.italic} className="italic-btn action-bar-btn">
        <i className="fas fa-italic"></i>
      </button>
      <button
        onClick={wysiwyg.underscore}
        className="underline-btn action-bar-btn"
      >
        <i className="fas fa-underline"></i>
      </button>
      <button
        onClick={wysiwyg.caseType}
        className="uppercase-btn action-bar-btn"
      >
        <i className="fas fa-long-arrow-alt-up"></i>
      </button>
      <input
        type="color"
        onChange={wysiwyg.color}
        className="color-btn action-bar-btn"
      />
    </div>
  );
};
