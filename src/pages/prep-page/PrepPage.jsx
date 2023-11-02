import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PrepPage.css";

function PrepPage({ quizName, link }) {
  const background = {
    backgroundImage: 'url("/assets/images/cool-background.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const quiz = quizName ? quizName : "this Quiz";

  return (
    <div
      className="d-flex justify-content-center align-items-center h-100"
      style={background}
    >
      <div
        className="bg-light rounded h-25 p-4 d-flex flex-column align-items-center"
        style={{ width: "50%", minWidth: "20rem" }}
      >
        <h1 className="mb-4">Ready for {quiz}?</h1>
        <Link className="w-50 h-50" to="/questions">
          <Button size="lg" className="w-100 h-100">
            Start Quiz
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PrepPage;
