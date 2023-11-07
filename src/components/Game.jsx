import React, { useState } from "react";
import { players, categories, questions } from '../constants';
import Modal from "./Modal";

const CategoryCard = ({ category }) => {
  return (
    <div className={"container w-64 h-24 border-2 border-white border-opacity-200 rounded-none"}>
      <h1 className={"text-center p-8"}>
        {category.title}
      </h1>
    </div>
  )
}

const QuestionCard = ({ question, displayQuestion }) => {

  return (
    <div onClick={(event) => displayQuestion(event, question)} className={"cursor-pointer container w-64 h-24 border-2 border-white border-opacity-200 rounded-none"}>
      <br/>
      <h1 className={"text-center p-3"}>
        {question.points}
      </h1>
    </div>
  )
}

const PlayerCard = ({ player }) => {
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
  const [points3, setPoints3] = useState(0);

  if (player.id === 0) {
    return (
      <div className={"container w-48 h-20 border-2 border-white border-opacity-200 rounded-none p-4"}>
        <div>
          <h1 className={"text-center"}>
            {player.name}
          </h1>
        </div>
        <div className={"flex justify-center"}>

          <h2>
            - {points1} +
          </h2>
        </div>
      </div>
    )
  } else if (player.id === 1) {
    return (
      <div className={"container w-48 h-20 border-2 border-white border-opacity-200 rounded-none p-4"}>
        <div>
          <h1 className={"text-center"}>
            {player.name}
          </h1>
        </div>
        <div className={"flex justify-center"}>

          <h2>
            - {points2} +
          </h2>
        </div>
      </div>
    )
  } else if (player.id === 2) {
    return (
      <div className={"container w-48 h-20 border-2 border-white border-opacity-200 rounded-none p-4"}>
        <div>
          <h1 className={"text-center"}>
            {player.name}
          </h1>
        </div>
        <div className={"flex justify-center"}>

          <h2>
            - {points3} +
          </h2>
        </div>
      </div>
    )
  }
}

const Game = () => {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const displayQuestion = (event, question) => {
    event.preventDefault();
    setModalOpen(true);
    setCurrent(question);
  }

  return (
    <section className="relative w-full h-screen mx-auto">
      <br/>
      <br/>
      <div>
      {modalOpen && <Modal modalOpen={setModalOpen} question={current} />}
        <div className="flex space-x-0 gap-1 justify-center">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>

      <br/>
      <br/>

      <div>
        <div className="grid grid-rows-5 grid-flow-col gap-1 justify-center">
          {questions.map((question, index) => (
            <QuestionCard key={index} question={question} displayQuestion={displayQuestion}/>
          ))}
        </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>

      <div>
        <div className="flex justify-evenly">
          {players.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Game
