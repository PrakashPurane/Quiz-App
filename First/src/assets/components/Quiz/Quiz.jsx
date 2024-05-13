import React, { useState } from "react";
import QuestionData from "../QuestionData.jsx";
import Mode from "../Mode/Mode.jsx";

import "./Quiz.css";

const Quiz = ({ isDarkMode }) => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOptionDisabled, setIsOptionDisabled] = useState(true);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [showSubmit, setShowSubmit] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const totalQuestions = QuestionData[selectedSubject]?.length || 0;

  const handleSubjectSelect = (optionIndex) => {
    setSelectedSubject(optionIndex);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsOptionDisabled(false);
    setAnswerStatus(null);
    setShowSubmit(false);
    setCorrectAnswers(0); // Reset correct answers when subject changes
    setShowResult(false);
    setErrorMessage("");
  };
  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
    setIsOptionDisabled(false);
    setAnswerStatus(null);
    setShowSubmit(true);
    setErrorMessage("");
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsOptionDisabled(true);
      setSelectedOption(null);
      setAnswerStatus(null);
      setShowSubmit(false);
    } else {
      setShowResult(true);
    }
  };

  const checkAnswer = () => {
    if (selectedOption === null) {
      // No option selected, show an error message or handle it as you prefer
      console.log("Please select an option before submitting.");
      setErrorMessage("Please select an option before submitting.");
      return;
    } else {
      const currentQuestion =
        QuestionData[selectedSubject][currentQuestionIndex];
      const correctAnswerIndex = currentQuestion.options.findIndex(
        (option) => option === currentQuestion.correctAnswer
      );

      const isCorrect = selectedOption === correctAnswerIndex;

      setAnswerStatus(isCorrect ? "correct" : "incorrect");

      if (isCorrect) {
        setCorrectAnswers(correctAnswers + 1); // Increment correct answers
      }

      setIsOptionDisabled(true); // Disable options after submission
      setShowSubmit(false); // Hide the submit button
      setTimeout(moveToNextQuestion, 600); // Move to next question after 1 second
    }
  };

  const handleTryAgain = () => {
    setSelectedSubject(null);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsOptionDisabled(true);
    setAnswerStatus(null);
    setShowSubmit(false);
    setCorrectAnswers(0);
    setShowResult(false);
    setCorrectAnswerIndex(null);
    setErrorMessage(""); // Clear error message
  };
  return (
    <>
      <div className={isDarkMode ? "dark-mode" : ""}>
        <div className="container">
          {showResult ? (
            <div className="result-container app-container">
              <h2>
                You scored {correctAnswers} out of {totalQuestions}.
              </h2>
              <button onClick={handleTryAgain}>Try Again</button>
            </div>
          ) : (
            <>
              <div className="container-left">
                <span className="thin">
                  {!selectedSubject ? (
                    <>
                      Welcome to the Frontend Quiz!
                      <div className="italic">
                        <i>Pick a subject to get started.</i>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="question">
                        <div className="selectedsubject">{selectedSubject}</div>
                        <i>Questions {currentQuestionIndex + 1} of 5</i>

                        <p>
                          {
                            QuestionData[selectedSubject][currentQuestionIndex]
                              .question
                          }
                        </p>
                      </div>
                    </>
                  )}
                </span>
              </div>
              {!selectedSubject && (
                <div className="subject-list">
                  <div
                    className="container-listing"
                    onClick={() => handleSubjectSelect("HTML")}
                  >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAn9JREFUSEu1lUtoE1EUhv8z0VZbteJMGheC74XCTHyClEKpLnQhCL5qRQV3guJCF50bFQoab7ToTl2KUKTNwoUufVAsFHRhOom68Q0ilkyKRaomJDkyxZRxjM0kpLO99/zfmf+cf4Ywyw/Nsj5qAlgXQyvDF8Y++GmuasArGVxTAL8B8MwQ9rZKkKoBVkw9Rkx3ANw3hL2n/gCp3SLgBIEjusjIugOSUhsFECagUxf2UM2A15cWL88rgS4jkrlaErH6Qs2UL0wAUHLZhgVber/8SEq1Z06hMLD+/LdP5WBlZ2BF1R1EFAdhCRO6w6Y94BS/jGqdRQVPQHhhmPZmS2rdBNwFY5yZD4bPZR57If8AUlI7y8AVAAEmujfZ0Hik7cznn05hSqqCQZfBdMOIpE+NXF82vzmX7SfmvQAKBPTowr7mhkwDpi5nf90moAtAEczCbY9TZEntAQG7ifiobmb6S0LJmGqCKepYx8DgZOO846WmpgDcCyXVqA4D1AbgOynFfXrP+EPv6yZl0AZYBQKrDTH23n1uyeAuAscBLAR4RDcz7UTgKUA8jsC6d9oQA+0AJgDeb4jMI7eAK2BpQ9itXvhorHWnwsVBAC0AhnXT7pgGOJe9FjFghoXdN71BMwSsokXubrxDbmpqObz29NusVSZgVQ35Lz9da0qgQ7pID1oxLUGMDSDqMMz00z9Dr35NS6CEXLpCQf6AY5MrYMhlGxY5AXNvUIHnDmwUXz/6Dpr3oiXV7QRyQpQwhL2p0uehbA5mKrJiwQgxRwl0Uxfpk/UH/CdgfkC+/gdJqT0HsLVcwCpBfAEckaQMrfKmt5K4c+4b4Ees5i2qVdyp+w1IwB0ooJcJtAAAAABJRU5ErkJggg==" />
                    <h1>HTML</h1>
                  </div>

                  <div
                    className="container-listing"
                    onClick={() => handleSubjectSelect("CSS")}
                  >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARVJREFUSEvtlEFqwlAQhv9RPIQUJMGF3Ql9PYaxF/AY7UK6baGFbqQ3acRT5G104a6+ULErt+6akRSFRF6c19JYBbMLM+//5p8ZhlDyRyXrwwmgIlXD53IAoAdgRcyvUTd+dCnOCXA19B+I+T4nyHSnu7MXCeIEUKG3AFDnhNqVaiVh/poA+NCBafwVgFMhHZjvglTo5f73QVwdnAjg+s27YcITgEub7d0WWXKmBL6Ngni0jeVapEJvDuCiqKcOgPTpuw5MswjgPDxbEbbh7zo4DEDabSm+bWWaZ3UgCUhxEZBNkMSy8eOZwdnBvw45BiDe+L2bRTC6Y3zrqdgcu2cArZ+sZyZ3TOB+4bH7pahgqAzVjOYalMWgGe74YFgAAAAASUVORK5CYII=" />
                    <h1>CSS</h1>
                  </div>
                  <div
                    className="container-listing"
                    onClick={() => handleSubjectSelect("Javascript")}
                  >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAyZJREFUSEu1lV1oHGUUht93ZpdASQkUsVXam7Z0ZxsUBX+o6W6K9kYFqULa3glushNSq+CFREJTEgsKpUWkSXYG9UJRq72wFb0Uk9mibaH4kzSdZGupCIKlPzfbQrs785YvutjWTXZpzNzNmXPO851zvvMOscQPlzg/mgZk3ZkdkPaCEmANB17qi2YO1xDQ0XOm3bLsQwSeIDEkIAlhAMAJS+wb91PhQqB5AZtyZ1YkkvY+Cj0gP63CfvOHwvqLJlkmP/0AaB8gtB1QoVKNB3/8sP1KPdB/AF1dsi+uCPsEDlE4H9lyj4+lT9cL3pyffdJm7AlYA3Fw5dUNhSNHGN3uewdgS8/sI7LiwwLaIPUHvvMxQC3cazHjzrgE9hG4FIE7jnupX2oxdwCyveEpCr+XVX75tP/Y9WaGWPPpeCVcnkjyMwH3BV5qU11Axg3PQThU9J33ag6dveFwLKnopff+05J+AZ0AIgFTlvDVhO+8b/yz+Zl+Ud1Fz1nfNCDrhkeNcxRHA7ZlT4I8aCH+xtjimFtBDFB4esJ3vs+4Z98CmLsnACx8hBjHAO4MvA1f1mbT6YafSDwR+KmRxVWQRJ9dQQnAMgBmPj8Jmgb4bdFzjs1d38VUEHjOtmz+7EMCt5F4XMBGAuv+7rVGAi/96qIqIBgIWhd4zq7aAM0yJhOJw4LWmr7/H4B3SOwhdKoGicUxAKXAc15YFOCayl2tVuuohBzwr0gSOFphwjUy0hBgFg3Cn8mEct+NpC/P3W03/BpQNfDSL5l305aWpPVwBOu6bVWnx0fby8a+Nf9b202r8jmAtqDgdMyzyaVHocjI8IMkDsbgVUpDlD6Y8NNv1N9sMZOfzZF6F9BfEHYGfnqyLsAYn91dainfiIZJvA6gBcAfFpUdL6Qv3A3I9IYdjDEKYo2owVWXnbEFxe72BM90T66s2om1N5e1/py8Vn5RNqeKY86vxmdLd2m1rOp+kdsBFCrVaE/Tcn33KZ/qPXd/QlUfwPME35679ZDRo5M2493jhY1TC4liwz9aLTjrzjwHyDMSJOC12vY2UtymAY0Szfd9yQG3AMS1nygZIvwDAAAAAElFTkSuQmCC" />
                    <h1>Javascript</h1>
                  </div>
                  <div
                    className="container-listing"
                    onClick={() => handleSubjectSelect("Accessibility")}
                  >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA9FJREFUSEu1lV9oW3UUx7/nl6bNhDEQkQ02TO5NvTfJ6L3JrG6o3YsPbviioyrzwTmG/0CUOcXhphtDHQzni4LDycQXh/XP05gPPrhKNym1uWltkts296ZUdIIIEw frkvs77tcsNUmbtgjLU37nfM/vc87vd37nEm7xj27x/lgWwPgy5Ma7HwGLXjDSBN6iEpLACDGyDBo2/Z5zBJLtEm0LmOwe02QgzwLoXaHKi5Ll7qSfmVlKtySgqDnPAzgJYA2YL4Hoc5ayIDrlxHwF10WKRCjJ4KcJuA/AVTC9bPrWp62QRQBXy77IoI8AzIH4sFGy3293BAwWrpZ7DcBRAF0AXjA9++NGSBNgKj6uBzIYB9AJyK2mlxmpi6fiuUxVym/VukOIR7unrdG6z9WyvQy6NJ9UQJvNGcuv+xYAtWycYYC2gPmQ6affacykoGWPEOhtZWPw0YSXPtLodzXnLa5VMmR41oM3tKz8CwBXcx5g4EeAfzY8+97WY1mugptQdVyqKktK2pYsWz81AQqx3AEiPsHEzyRK6c+Ucyo+mqxKMQDwgJChs0a5p6jsbnTMlCJ4EqD+DiH7u6czeWUv6NlniekUAfsNz/6gCVDUnK8A7GqkF6Kj20mIUwCMNq3qspTPJcqZC8o/GRvrkyQvADRgetbjrYBZABuDSHhtKp/6p+l8o2Mmi+AkQDtqdj5PMrS/XlFdO63n7qwy/wHgV9OzN7UCfgewPpDhDaly6nJrxitdstJPRCfWh0RF7XPZ9OwNzYCYcx6Eh0G0wyxZ37UCXM35moHHbgZ9Y3j2rsWa7E4GnVMVml56Z/Mla857BLxBwEHDs483Bpe0kXUVdPxJgFvrGBhhVO/QvXuuNOqKunMIjGNE/K5RSr/Z3Ka68wQz1OwpB5GwkcqnrteDC3p2DzGdAdM+AoiJPwGw1/TsM3XN7MaLa6523lYAcBeY+k3fUk3z3zvwo35kTlzJAbibgeMJzz5YDy5qzvcA+oJI+HZlC12r/AVg0PTshxY0evYEmA6o7u6S63pi5di1JsB8f8dGLSYxrKYBMbYZvq3+o6g7h0mSbvjWnvm15pwGYcYs2cfUOh/NbRWChwBUQkJm6u9iEaAWnH0FIPVIVjXsJrXc6zdmghobXcx4KeHbHzbey5Lj2o3l9jGxGtdr6+NasMhXKqFfOiNzoWoVyZZx/TcxvWr41unWzmr7wZnWxzdVOfgCwP2tQU1rxg+oyqfM2cxvS+lW/CZPxJ1Uh+TtzNQHQh9AFYIcYtBgSMjBxvP+X4Bls1+Fc8UKVrHHspJ/ARhuoyg6z4pDAAAAAElFTkSuQmCC" />
                    <h1>Accessibility</h1>
                  </div>
                </div>
              )}
              {selectedSubject && (
                <div className="container-right">
                  <div className="container-list">
                    {QuestionData[selectedSubject][
                      currentQuestionIndex
                    ].options.map((option, index) => {
                      const isSelected = selectedOption === index;
                      const isCorrect =
                        answerStatus === "correct" && selectedOption === index;
                      const isIncorrect =
                        answerStatus === "incorrect" &&
                        selectedOption === index;

                      let className = "container-listing";
                      if (isSelected) className += " selected";
                      if (isCorrect) className += " correct";
                      if (isIncorrect) className += " incorrect";

                      return (
                        <div
                          key={index}
                          className={className}
                          onClick={() => handleOptionSelect(index)}
                        >
                          <h1>{option}</h1>
                        </div>
                      );
                    })}
                  </div>
                  <div className="submit-button">
                    <button onClick={checkAnswer} disabled={isOptionDisabled}>
                      Submit
                    </button>
                    {errorMessage && (
                      <p className="error-message">{errorMessage}</p>
                    )}
                  </div>
                </div>
              )}
              {showResult && (
                <div className="result-container">
                  <h2>
                    You scored {correctAnswers} out of {totalQuestions}.
                  </h2>
                  <button onClick={handleTryAgain}>Try Again</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Quiz;
