import React, { useState }  from 'react';
import "./Modal.css"

function Modal({ modalOpen, question }) {
  const [isAnswered, setIsAnswered] = useState(false);

  let showAnswer = "hidden";

  if (isAnswered) {
    showAnswer = "";
  } else {
    showAnswer = "hidden";
  }

  const isClicked = (event) => {
    event.preventDefault();
    setIsAnswered(!isAnswered);
  }

  if (question.double) {
    return (
      <div className="fixed inset-0 bg-hero-pattern bg-cover bg-center bg-opacity-25 backdrop-blur-sm flex justifty-center items-center">
        <div onClick={isClicked} className="container mx-auto box-border h-1/2 w-1/2 border-2 border-white bg-purple">
          <div className="closer">
            <button className="closeButton" onClick={() => modalOpen(false)}> X </button>
          </div>
          <div className="text-center text-7xl">
            <h1>DOUBLE JEOPARTY</h1>
          </div>
          <br/>
          <br/>
          <div className="text-center text-3xl">
            <h1>{question.question}</h1>
          </div>
          <br/>
          <div className="text-center text-6xl">
            <h1 className={showAnswer}>{question.answer}</h1>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="fixed inset-0 bg-hero-pattern bg-cover bg-center bg-opacity-25 backdrop-blur-sm flex justifty-center items-center">
        <div onClick={isClicked} className="container mx-auto box-border h-2/3 w-1/2 border-2 border-white bg-purple">
          <div className="closer">
            <button className="closeButton" onClick={() => modalOpen(false)}> X </button>
          </div>
          <br/>
          <div className="text-center text-3xl">
            <h1>{question.question}</h1>
          </div>
          <br/>
          <br/>
          <div className="text-center text-6xl">
            <h1 className={showAnswer}>{question.answer}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
