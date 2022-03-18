import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import quizzes from "../../quiz.json";
import "./quiz.scss";

const Quiz = () => {
  // Current Quiz
  const [currentQuiz, setCurrentQuiz] = useState(0);

  // Points
  const [points, setPoints] = useState(0);

  // Show Score
  const [showScore, setShowScore] = useState(false);

  // Chage Quiz
  const changeQuize = (guess, ans) => {
    if (currentQuiz < quizzes.length - 1) {
      setCurrentQuiz((old) => old + 1);
    }

    if (currentQuiz === quizzes.length - 1) {
      setShowScore(true);
    }

    if (guess === ans) {
      setPoints((old) => old + 1);
    }
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className="quiz-container">
        <section className="quiz">
          {showScore ? (
            <div className="score">
              <h1>
                You Answered Correctly {points} out of {quizzes.length}!
              </h1>
            </div>
          ) : (
            <div>
              <img src={quizzes[currentQuiz].image} alt="ad" />
              <div>
                {quizzes[currentQuiz].options.map((el) => (
                  <button
                    onClick={() => changeQuize(el, quizzes[currentQuiz].artist)}
                    key={el}
                  >
                    {el}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </React.Fragment>
  );
};

export default Quiz;
