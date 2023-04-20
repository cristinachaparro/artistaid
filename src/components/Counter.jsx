import { useState } from "react";

function Counter({ counter, setCounter }) {
  //increase counter
  const increase = () => {
    if (counter < 5) {
      setCounter((count) => count + 1);
    }
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
    <>
      <div className="text-center bg-yellow-500 pb-4">
        <h1 className="p-4">How many do you need?</h1>
        <div className="justify-center items-center">
          <button
            className="control-btn bg-slate-800 text-yellow-500 rounded-full p-4 m-4"
            onClick={increase}
          >
            +
          </button>
          <span className="text-4xl font-bold">{counter}</span>
          <button
            className="control-btn bg-slate-800 text-yellow-500 rounded-full p-4 m-4"
            onClick={decrease}
          >
            -
          </button>
          <br />
          <button
            className="reset bg-red-800 text-yellow-500 p-2 m-2"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
