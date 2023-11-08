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
    <div>HomePage</div>
  )
}


export default HomePage