// QuestionData.js
import React from "react";

const QuestionData = {
  HTML: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "Hyper Tool Markup Language"
      ],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<br>", "<lb>", "<break>", "<newline>"],
      correctAnswer: "<br>"
    },
    {
      question: "Which of the following is an example of an empty HTML element?",
      options: ["<p></p>", "<div></div>", "<hr>", "<span></span>"],
      correctAnswer: "<hr>"
    },
    {
      question: "What is the correct HTML for creating a hyperlink?",
      options: [
        '<a href="http://www.example.com">Click here</a>',
        '<a url="http://www.example.com">Click here</a>',
        '<a>http://www.example.com</a>',
        '<link>http://www.example.com</link>'
      ],
      correctAnswer: '<a href="http://www.example.com">Click here</a>'
    },
    {
      question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      options: ["src", "alt", "title", "href"],
      correctAnswer: "alt"
    }
  ],
  CSS: [
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets"
      ],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      options: ["text-color", "font-color", "color", "foreground-color"],
      correctAnswer: "color"
    },
    {
      question: "Which CSS property is used to control the spacing between lines of text?",
      options: ["line-height", "letter-spacing", "spacing", "text-spacing"],
      correctAnswer: "line-height"
    },
    {
      question: "Which CSS property is used to set the background color of an element?",
      options: ["bgcolor", "background-color", "color", "background"],
      correctAnswer: "background-color"
    },
    {
      question: "Which CSS property is used to make text bold?",
      options: ["font-weight", "bold", "text-style", "font-bold"],
      correctAnswer: "font-weight"
    }
  ],
  Javascript: [
    {
      question: "Which of the following is not a reserved word in JavaScript?",
      options: ["interface", "throws", "program", "short"],
      correctAnswer: "program"
    },
    {
      question: "How do you declare a JavaScript variable?",
      options: ["variable x;", "x = 5;", "var x;", "v x;"],
      correctAnswer: "var x;"
    },
    {
      question: "How do you write an IF statement in JavaScript?",
      options: ["if (i == 5)", "if i = 5 then", "if i == 5 then", "if i = 5"],
      correctAnswer: "if (i == 5)"
    },
    {
      question: "What is the correct way to write a JavaScript array?",
      options: ["var colors = 'red', 'green', 'blue';", "var colors = (1:'red', 2:'green', 3:'blue');", "var colors = ['red', 'green', 'blue'];", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue');"],
      correctAnswer: "var colors = ['red', 'green', 'blue'];"
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["-", "*", "=", "x"],
      correctAnswer: "="
    }
  ],
  Accessibility: [
    {
      question: "What is the primary purpose of ARIA attributes in HTML?",
      options: [
        "To improve the accessibility and usability of web content for people with disabilities",
        "To style HTML elements",
        "To add animations to web pages",
        "To create responsive layouts"
      ],
      correctAnswer: "To improve the accessibility and usability of web content for people with disabilities"
    },
    {
      question: "What does WCAG stand for?",
      options: [
        "Web Content Accessibility Guidelines",
        "Worldwide Consortium of Accessible Graphics",
        "Web Color Accessibility Group",
        "Web Content Accessibility Group"
      ],
      correctAnswer: "Web Content Accessibility Guidelines"
    },
    {
      question: "What is the purpose of alt text on images?",
      options: [
        "To provide a description of the image for screen readers",
        "To hide the image from sighted users",
        "To provide a title for the image",
        "To make the image stand out on the page"
      ],
      correctAnswer: "To provide a description of the image for screen readers"
    },
    {
      question: "What is the recommended contrast ratio for text and background colors according to WCAG?",
      options: [
        "4.5:1 for normal text and 3:1 for large text",
        "3:1 for normal text and 4.5:1 for large text",
        "5:1 for normal text and 3:1 for large text",
        "3:1 for normal text and 5:1 for large text"
      ],
      correctAnswer: "4.5:1 for normal text and 3:1 for large text"
    },
    {
      question: "What is the purpose of the tabindex attribute in HTML?",
      options: [
        "To specify the order in which elements are focused when navigating with the keyboard",
        "To add a border to an element",
        "To change the font size of an element",
        "To include an element in the page's search index"
      ],
      correctAnswer: "To specify the order in which elements are focused when navigating with the keyboard"
    }
  ]
};

export default QuestionData;
