import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/QuizContext";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="ggwp">GG WP!</div>
          <div className="results-info">
            <div>
              You've got{" "}
              <span className="count">{quizState.correctAnswersCount}</span> of{" "}
              <span className="questions-length">
                {quizState.questions.length}
              </span>{" "}
              right.
            </div>
          </div>
          <div
            onClick={() => dispatch({ type: "RESTART" })}
            className="res-button"
          >
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          {quizState.currentAnswer && (
            <div
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
              className="next-button"
            >
              Next question
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
