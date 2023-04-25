import { useState } from "react";
import randomWords from "random-words";

import Counter from "../components/Counter";

function Words() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1 className="text-center text-4xl p-5">Get inspired by words</h1>
      <Counter counter={counter} setCounter={setCounter} />
      <div className="text-center text-4xl p-8">
        {randomWords(counter).map((word) => (
          <p>{word}</p>
        ))}
      </div>
    </>
  );
}

export default Words;
