import { useState } from "react";
import emojisList from "emojis-list";

import Counter from "../components/Counter";

//1. acceder a la lista de emojisList en randomPos
//2. randomPos 0 - emojisList.length -1
//3. loop (counter) - cada emoji va en un array que luego mappeo para mostrarlo

function Emojis() {
  const [counter, setCounter] = useState(0);

  const result = [];

  //get a random position from the list of emojis
  function getRandomPos() {
    return Math.random() * (emojisList.length + 1);
  }

  for (let i = 0; i < counter; i++) {
    const randomPos = getRandomPos();
    result.push(emojisList[Math.round(randomPos)]);
  }

  return (
    <>
      <div className="bg-yellow-500 text-center">
        <h1 className="text-center text-2xl p-5">Get inspired by emojis</h1>
        <Counter counter={counter} setCounter={setCounter} />
        <div className="text-center text-4xl p-8">
          {result.map((emoji, i) => (
            <p key={`${emoji}-${i}`}>{emoji}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Emojis;
