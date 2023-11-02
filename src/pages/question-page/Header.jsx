import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header({ timer, questionNumber }) {
  return (
    <div className="w-100 mb-3 flex-row justify-content-between col-cen ">
      <Link
        className=" d-flex justify-content-center"
        style={{ width: "45px", height: "45px" }}
      >
        <Button className="w-100 h-100 p-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fillRule="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </Button>
      </Link>

      <div className="col-cen">
        <label htmlFor="q-count">Question</label>
        <h2 id="q-count">{questionNumber + 1}/10</h2>
      </div>

      <div className="col-cen">
        <label htmlFor="q-count">Time Left</label>
        <h2 id="q-count">{timer}</h2>
      </div>
    </div>
  );
}

export default Header;
