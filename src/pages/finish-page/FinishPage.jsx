import React, { useEffect, useState } from 'react';
import "./FinishPage.css";
import questionData from './QuestionData.json';

function FinishPage() {
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const calculateUserScore = () => {
      let totalScore = 0;

    }

  });

  return (
    <div className="FinishPage">
      <div className="content-container">
        <div className="header">
          <h2>Quiz Results</h2>
        </div>
        <div className="body">
          <div className="score">
            <p>Score: {score}</p>
          </div>
          <div className="result">
            <p>You Got: {score}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinishPage
