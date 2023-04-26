import { useEffect, useState } from "react";
import emojisList from "emojis-list";

import Counter from "../components/Counter";

//1. acceder a la lista de emojisList en randomPos
//2. randomPos 0 - emojisList.length -1
//3. loop (counter) - cada emoji va en un array que luego mappeo para mostrarlo

function Emojis() {
  const [counter, setCounter] = useState(0);
  const [list, setList] = useState([]);

  //get a random position from the list of emojis
  function getRandomPos() {
    return Math.random() * (emojisList.length + 1);
  }

  useEffect(() => {
    //adding emojis
    if (counter > list.length) {
      const randomPos = getRandomPos();
      const newEmoji = emojisList[Math.round(randomPos)];
      setList([...list, newEmoji]);
    } else if (counter < list.length) {
      //delete as many elements as the counter indicates
      setList(list.slice(0, counter));
    }
  }, [counter]);

  return (
    <>
      <h1 className="text-center text-2xl p-5">Get inspired by emojis</h1>
      <Counter counter={counter} setCounter={setCounter} />
      <div className="text-center text-4xl p-8">
        {list.map((emoji, i) => (
          <p key={`${emoji}-${i}`}>{emoji}</p>
        ))}
      </div>
    </>
  );
}

export default Emojis;
