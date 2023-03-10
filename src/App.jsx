import { useState } from "react";
import "./App.css";
import { QUESTIONS } from "./Questions";
import QuestionContainer from "./QuestionContainer";
import CompletionScreen from "./CompletionScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {count < QUESTIONS.length ? (
        <QuestionContainer
          current={count}
          next={setCount}
        />
      ) : (
        <CompletionScreen />
      )}
    </div>
  );
}

export default App;
