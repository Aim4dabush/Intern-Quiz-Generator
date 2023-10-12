import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import "./HomePage.css";

function HomePage() {
  const [quizData, setQuizData] = useState('');
  const [quizCategory, setQuizCategory] = useState([]);

  useEffect(() => {
    fetch(`https://the-trivia-api.com/v2/questions/`)
      .then((response) => response.json())
      .then((data) => {
        const categories = [...new Set(data.map((quiz) => quiz.category))];
        setQuizCategory(categories);
      });
  }, []);

  function formatText(category) {
    return category
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return (
    <div className="HomePage">
      <div className="content-container">
        <div className="welcome-message">
          <h2>Welcome to Quiz Generator</h2>
        </div>
        <div className="body">
          <div className="user-score">
            <h4>Quiz Score</h4>
          </div>
          <div className="categories">
            <h4>Quiz Categories</h4>
            <ul className="category-items">
              {quizCategory.map((category) => (
                <li className="list-items" key={category}>{formatText(category)}
                  <Link to={`/prepare`}></Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage