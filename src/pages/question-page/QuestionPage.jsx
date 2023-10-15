import "./QuestionPage.css";
import questionData from "./QuestionData.json";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Question from "./Question";
import Answers from "./Answers";

function QuestionPage() {
  const [trivia, setTrivia] = useState(questionData);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState("5:00");

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

  function nextQuestion(answer) {
    setQuestionNumber(questionNumber + 1);

    if (trivia[questionNumber].correctAnswer == answer) {
      setScore(score + 1);
    }
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
      <Header timer={timer} questionNumber={questionNumber} />

      <Question question={trivia[questionNumber].question.text} />

      <Answers
        answers={answers}
        questionNumber={questionNumber}
        nextQuestion={nextQuestion}
        score={score}
      />
    </div>
  );
}

export default QuestionPage;
