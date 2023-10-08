import "./QuestionPage.css";
import questionData from "./QuestionData.json";
import React, { useEffect, useState } from "react";

function QuestionPage() {
  const [trivia, setTrivia] = useState(questionData);
  const [questionNumber, setQuestionNumber] = useState(0);

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
    <div className="QuestionPage">
      <div className="">
        <div>
          <button>X</button>
        </div>
        <div className="">
          <label for="q-count">Question</label>
          <h2 id="q-count">1/10</h2>
        </div>
        <div className="">
          <label for="q-count">Question</label>
          <h2 id="q-count">5:00</h2>
        </div>
      </div>
      <h1>Random Trivia Questions</h1>
    </div>
  );
}

export default QuestionPage;
