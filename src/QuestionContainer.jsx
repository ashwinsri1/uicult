import React from "react";
import { QUESTIONS } from "./Questions";

function QuestionContainer(props) {
  const { current, next } = props;
  const question = QUESTIONS[current].question;
  const answer = QUESTIONS[current].answer;

  function checkForAnswer() {
    const inputAnswer = document.getElementById("answer").value.trim().replaceAll(", ", ",");
    if (answer.toLowerCase() === inputAnswer.toLowerCase()) {
      next(current + 1);
      document.getElementById("answer").value = "";
    }
  }

  return (
    <div className="container">
      <pre className="question">{question}</pre>
      <input
        type="text"
        id="answer"
        placeholder="Please enter 'Error' in case the output is an error"
        onChange={checkForAnswer}
      />
    </div>
  );
}

export default QuestionContainer;
