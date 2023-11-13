import React, { useState, useEffect } from "react";
import { players, categories } from '../constants';
import QuestionCard from "./Questions";
import soundfile from '../pings/ping.mp3'
import soundfile2 from '../pings/ping2.mp3'
import soundfile3 from '../pings/ping3.mp3'
import "./index.css"

// I have three game states,
// Waiting for Buzzer
// Mid Buzzer
// returns to Waiting Buzzer
// render two different types of players?

const CategoryCard = ({ category }) => {
  return (
    <div className={"flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"}>
      <h1 className={"m-auto"}>
        {category.title}
      </h1>
    </div>
  )
}

const PlayerCard = ({ player }) => {
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
  const [points3, setPoints3] = useState(0);

  const decrease1 = (event) => {
    event.preventDefault();
    let curr_sum = points1 - 100;
    setPoints1(curr_sum);
  }
  const increase1 = (event) => {
    event.preventDefault();
    let curr_sum = points1 + 100;
    setPoints1(curr_sum);
  }
  const decrease2 = (event) => {
    event.preventDefault();
    let curr_sum = points2 - 100;
    setPoints2(curr_sum);
  }
  const increase2 = (event) => {
    event.preventDefault();
    let curr_sum = points2 + 100;
    setPoints2(curr_sum);
  }
  const decrease3 = (event) => {
    event.preventDefault();
    let curr_sum = points3 - 100;
    setPoints3(curr_sum);
  }
  const increase3 = (event) => {
    event.preventDefault();
    let curr_sum = points3 + 100;
    setPoints3(curr_sum);
  }

  window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    key.classList.add("playing");
  })

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  useEffect(() => {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  }, [])


  if (player.id === 0) {
    return (
      <section>
        <div data-key="90" className="key">
          <div>
            <h1 className={"text-center"}>
              {player.name}
            </h1>
          </div>
          <div className={"flex justify-center"}>
            <div className="px-1 cursor-pointer" onClick={(event) => decrease1(event)}>{"<"}</div>
            <h2>
              {points1}
            </h2>
            <div className="px-1 cursor-pointer" onClick={(event) => increase1(event)}>{">"}</div>
          </div>
        </div>
        <audio data-key="90" src={soundfile}></audio>
      </section>
    )
  } else if (player.id === 1) {
    return (
      <section>
        <div data-key="86" className="key">
          <div>
            <h1 className={"text-center"}>
              {player.name}
            </h1>
          </div>
          <div className={"flex justify-center"}>
            <div className="px-1 cursor-pointer" onClick={(event) => decrease2(event)}>{"<"}</div>
            <h2>
              {points2}
            </h2>
            <div className="px-1 cursor-pointer" onClick={(event) => increase2(event)}>{">"}</div>
          </div>
        </div>
        <audio data-key="86" src={soundfile2}></audio>
      </section>
    )
  } else if (player.id === 2) {
    return (
      <section>
        <div data-key="77" className="key">
          <div>
            <h1 className={"text-center"}>
              {player.name}
            </h1>
          </div>
          <div className={"flex justify-center"}>
          <div className="px-1 cursor-pointer" onClick={(event) => decrease3(event)}>{"<"}</div>
            <h2>
              {points3}
            </h2>
            <div className="px-1 cursor-pointer" onClick={(event) => increase3(event)}>{">"}</div>
          </div>
        </div>
        <audio data-key="77" src={soundfile3}></audio>
      </section>
    )
  }
}

const Game = () => {

  return (
    <section className="relative w-full h-screen mx-auto">
      <br/>
      <br/>
      <div>
        <div className="flex space-x-0 gap-1 justify-center overflow-auto">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>

      <br/>

      <div>
        <div>
          <QuestionCard />
        </div>
      </div>

      <br/>

      <div>
        <div className="flex justify-evenly overflow-auto py-4">
          {players.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Game
