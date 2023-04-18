import { useState } from "react";

function Emojis() {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>How many do you need?</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn-container">
        <button className="control-btn" onClick={increase}>
          +
        </button>
        <button className="control-btn" onClick={decrease}>
          -
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Emojis;
