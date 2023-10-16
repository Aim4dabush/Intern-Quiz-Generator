import React from 'react';
import "./FinishPage.css";

function FinishPage() {

  return (
    <div className="FinishPage">
      <div className="content-container">
        <h2>Quiz Results</h2>
        <p>Score:</p>
        <p>You Got:</p>
        <Button onClick>Replay</Button>
        <Button onClick>Back</Button>
      </div>
    </div>
  )
}

export default FinishPage
