import "./QuestionPage.css";
import questionData from "./QuestionData.json";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

function QuestionPage() {
  const [trivia, setTrivia] = useState(questionData);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const background = {
    backgroundImage: 'url("/src/assets/images/cool-background.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  function nextQuestion() {
    setQuestionNumber(questionNumber + 1);
  }

  console.log(questionNumber);

  //assemble incorrect answers in random order
  const rightAnswerPosition = Math.floor(Math.random() * 4);

  let answers = [];
  trivia[questionNumber].incorrectAnswers.map((data) => {
    answers.push(data);
  });
  shuffleArray(answers);

  //randomly add correct answer
  if (rightAnswerPosition != 3) {
    answers.push(answers[rightAnswerPosition]);
    answers[rightAnswerPosition] = trivia[questionNumber].correctAnswer;
  } else {
    answers.push(trivia[questionNumber].correctAnswer);
  }

  /* useEffect(() => {
    // Define the API endpoint and query parameters
    const apiUrl = "https://the-trivia-api.com/v2/questions";
    const limit = 10;
    const categories =
      "science,film_and_tv,music,history,geography,art_and_literature,sport_and_leisure,general_knowledge,science,food_and_drink";
    const difficulties = "easy,medium,hard";
    const types = "text_choice";

    // Construct the full API URL with query parameters
    const fullApiUrl = `${apiUrl}?limit=${limit}&categories=${categories}&difficulties=${difficulties}&types=${types}`;

    // Make the GET request to the API
    fetch(fullApiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTrivia(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []); */

  return (
    <div className="col-cen h-100 p-3" style={background}>
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

        <div className=" ">
          <label htmlFor="q-count">Question</label>
          <h2 id="q-count">{questionNumber + 1}/10</h2>
        </div>

        <div className=" ">
          <label htmlFor="q-count">Time Left</label>
          <h2 id="q-count">5:00</h2>
        </div>
      </div>

      <h1
        className="d-inline bg-light rounded text-center w-100 p-2 mb-4"
        style={{ height: "200px", lineHeight: "160px" }}
      >
        <span
          className="d-inline-block align-middle"
          style={{ lineHeight: "normal" }}
        >
          {trivia[questionNumber].question.text}
        </span>
      </h1>

      <div className="w-100">
        <Row className="mb-4" style={{ height: "150px" }}>
          <Col xs={6}>
            <Button className="w-100 h-100 fs-2" onClick={nextQuestion}>
              {answers[0]}
            </Button>
          </Col>
          <Col xs={6}>
            <Button className="w-100 h-100 fs-2" onClick={nextQuestion}>
              {answers[1]}
            </Button>
          </Col>
        </Row>
        <Row style={{ height: "150px" }}>
          <Col xs={6}>
            <Button className="w-100 h-100 fs-2" onClick={nextQuestion}>
              {answers[2]}
            </Button>
          </Col>
          <Col xs={6}>
            <Button className="w-100 h-100 fs-2" onClick={nextQuestion}>
              {answers[3]}
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default QuestionPage;
