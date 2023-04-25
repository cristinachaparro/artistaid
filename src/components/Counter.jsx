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
            className="font-rubik text-2xl control-btn bg-slate-800 text-yellow-500 rounded-full m-4 w-12 h-12"
            onClick={increase}
          >
            &#43;
            {/* &plus; doesn't work */}
          </button>
          <span className="text-4xl font-bold">{counter}</span>
          <button
            className="font-rubik text-2xl control-btn bg-slate-800 text-yellow-500 rounded-full m-4 w-12 h-12"
            onClick={decrease}
          >
            &minus;
          </button>
          <br />
          <button
            className="font-rubik text-xl bg-red-800 text-yellow-500 p-2 m-2"
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
