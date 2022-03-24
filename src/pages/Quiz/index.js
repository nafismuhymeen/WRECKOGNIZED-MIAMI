import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import quizzes from "../../quiz.json";
import { navUnderLine } from "../../Recoil/navRecoil";
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

  // Nav UnderLine
  const setUnderLine = useSetRecoilState(navUnderLine);

  // Page On LOad
  useEffect(() => {
    setUnderLine("Quiz");
  }, []);
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
      <Footer />
    </React.Fragment>
  );
};

export default Quiz;
