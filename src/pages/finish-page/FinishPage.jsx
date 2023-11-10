import React, { useEffect, useState } from "react";
import "./FinishPage.css";
//import questionData from './QuestionData.json';

function FinishPage() {
  const [userAnswer, setUserAnswer] = useState([]);

  useEffect(() => {
    fetch(`https://the-trivia-api.com/v2/questions/`)
      .then((response) => response.json())
      .then((data) => {
        if (!data || data.length === 0) {
          console.log("No questions found");
          return;
        }

        const correctAnswer = data.reduce((count, question, index) => {
          if (question.correctAnswer === userAnswer[index]) {
            return count + 1;
          }
          return count;
        }, 0);

        console.log(`${correctAnswer}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userAnswer]);

  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(`https://the-trivia-api.com/v2/questions/`)
      .then((response) => response.json())
      .then((data) => {
        if (!data || data.length === 0) {
          console.log("No questions found");
          return;
        }
      });
  }, []);

  return (
    <div className="FinishPage">
      <div className="content-container">
        <div className="header">
          <h2>Quiz Results</h2>
        </div>
        <div className="body">
          <div className="score">
            <p>Score:</p>
          </div>
          <div className="result">
            <p>You Got:</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinishPage;
