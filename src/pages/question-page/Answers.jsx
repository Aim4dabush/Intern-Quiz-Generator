import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

function Answers({ answers, questionNumber, score, nextQuestion }) {
  return (
    <div className="w-100">
      <Row className="mb-4" style={{ height: "150px" }}>
        {answers.slice(0, 2).map((answer, index) => (
          <Col key={index} xs={6}>
            <Link
              to={questionNumber + 1 == 10 && "/finish"}
              state={{ score: score }}
            >
              <Button
                className="w-100 h-100 fs-2"
                onClick={() => nextQuestion(answer)}
              >
                {answer}
              </Button>
            </Link>
          </Col>
        ))}
      </Row>
      <Row style={{ height: "150px" }}>
        {answers.slice(2, 4).map((answer, index) => (
          <Col key={index} xs={6}>
            <Link
              to={questionNumber + 1 == 10 && "/finish"}
              state={{ score: score }}
            >
              <Button
                className="w-100 h-100 fs-2"
                onClick={() => nextQuestion(answer)}
              >
                {answer}
              </Button>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Answers;
