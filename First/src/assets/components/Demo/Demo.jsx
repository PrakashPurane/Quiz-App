import React, { useState } from 'react';
import './App.css';

const subjects = [
  {
    id: 1,
    name: 'Subject 1',
    questions: [
      {
        id: 1,
        text: 'Question 1 for Subject 1',
        options: [
          { id: 1, text: 'Option 1' },
          { id: 2, text: 'Option 2' },
          { id: 3, text: 'Option 3' },
          { id: 4, text: 'Option 4' },
        ],
        correctOptionId: 1, // Replace with the correct option id
      },
      {
        id: 2,
        text: 'Question 2 for Subject 1',
        options: [
          { id: 5, text: 'Option 1' },
          { id: 6, text: 'Option 2' },
          { id: 7, text: 'Option 3' },
          { id: 8, text: 'Option 4' },
        ],
        correctOptionId: 3, // Replace with the correct option id
      },
      // Add more questions for Subject 1 as needed
    ],
  },
  {
    id: 2,
    name: 'Subject 2',
    questions: [
      {
        id: 1,
        text: 'Question 1 for Subject 2',
        options: [
          { id: 9, text: 'Option 1' },
          { id: 10, text: 'Option 2' },
          { id: 11, text: 'Option 3' },
          { id: 12, text: 'Option 4' },
        ],
        correctOptionId: 2, // Replace with the correct option id
      },
      {
        id: 2,
        text: 'Question 2 for Subject 2',
        options: [
          { id: 13, text: 'Option 1' },
          { id: 14, text: 'Option 2' },
          { id: 15, text: 'Option 3' },
          { id: 16, text: 'Option 4' },
        ],
        correctOptionId: 4, // Replace with the correct option id
      },
      // Add more questions for Subject 2 as needed
    ],
  },
  // Add more subjects as needed
];

const App = () => {
  const [subject, setSubject] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [theme, setTheme] = useState('light');

  const handleSubjectChange = (subjectId) => {
    setSubject(subjects.find((sub) => sub.id === subjectId));
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const correctOptionId = subject.questions[currentQuestion].correctOptionId;
      if (selectedOption === correctOptionId) {
        setScore(score + 1);
      }
      setSelectedOption(null);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert('Please select an option before moving to the next question.');
    }
  };

  const handleReset = () => {
    setSubject(null);
    setCurrentQuestion(0);
    setScore(0);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      {subject ? (
        <>
          <h1>{subject.name} Quiz</h1>
          {currentQuestion < subject.questions.length ? (
            <div>
              <h2>Question {currentQuestion + 1}</h2>
              <p>{subject.questions[currentQuestion].text}</p>
              <ul>
                {subject.questions[currentQuestion].options.map((option) => (
                  <li
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    className={selectedOption === option.id ? 'selected' : ''}
                  >
                    {option.text}
                  </li>
                ))}
              </ul>
              <button onClick={handleNextQuestion}>Next</button>
            </div>
          ) : (
            <div>
              <h2>Quiz Completed!</h2>
              <p>Your score: {score}/{subject.questions.length}</p>
              <button onClick={handleReset}>Play Again</button>
            </div>
          )}
        </>
      ) : (
        <div>
          <h1>Choose a Subject</h1>
          <ul>
            {subjects.map((sub) => (
              <li key={sub.id} onClick={() => handleSubjectChange(sub.id)}>
                {sub.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
