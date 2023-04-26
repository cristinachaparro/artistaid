import { useEffect, useState } from "react";
import randomWords from "random-words";

import Counter from "../components/Counter";

function Words() {
  const [counter, setCounter] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (counter > list.length) {
      const newWord = randomWords(1);
      setList([...list, newWord]);
    } else if (counter < list.length) {
      setList(list.slice(0, counter));
    }
  }, [counter]);

  return (
    <>
      <h1 className="text-center text-4xl p-5">Get inspired by words</h1>
      <Counter counter={counter} setCounter={setCounter} />
      <div className="text-center text-4xl p-8">
        {list.map((word, i) => (
          <p key={`${word}-${i}`}>{word}</p>
        ))}
      </div>
    </>
  );
}

export default Words;
