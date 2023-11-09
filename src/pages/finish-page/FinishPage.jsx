import React, { useEffect, useState } from 'react';
import "./FinishPage.css";

function FinishPage() {
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const calculateUserScore = () => {
      let totalScore = 0;

      questionData.forEach((question, index) => {
        if (question.correctAnswer === userAnswer[index]) {
          totalScore++;
        }
      });

      setScore(totalScore);
    };

    calculateUserScore();
  }, [userAnswer]);

  const totalQuestions = questionData.length;
  const scorePercentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div className="FinishPage">
      <div className="content-container">
        <div className="header">
          <h2>Quiz Results</h2>
        </div>
        <div className="body">
          <div className="score">
            <p>Score: {percentage}%</p>
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
