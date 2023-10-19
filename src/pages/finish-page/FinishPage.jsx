import React from 'react';
import "./FinishPage.css";

function FinishPage() {

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
  )
}

export default FinishPage
