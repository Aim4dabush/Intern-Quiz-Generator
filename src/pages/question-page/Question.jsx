import React from "react";

function Question({ question }) {
  return (
    <h1
      className="d-inline bg-light rounded text-center w-100 p-2 mb-4"
      style={{ height: "200px", lineHeight: "160px" }}
    >
      <span
        className="d-inline-block align-middle"
        style={{ lineHeight: "normal" }}
      >
        {question}
      </span>
    </h1>
  );
}

export default Question;
