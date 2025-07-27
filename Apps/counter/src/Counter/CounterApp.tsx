import { useState } from "react";

const CounterApp = () => {
  const buttonClass =
    "h-16 w-16 bg-amber-50 rounded-full hover:bg-amber-100 cursor-pointer shadow-2xl";

  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="">
      <div className="bg-amber-200 w-96 h-96 mx-auto my-48 rounded-2xl flex flex-col justify-center items-center gap-5">
        <div className="flex justify-center gap-16 items-center">
          <button className={buttonClass} onClick={incrementCount}>
            <p className="font-2xl font-bold">+</p>
          </button>
          <div>
            <p className="text-2xl font-bold transition-transform duration-200 hover:scale-110">
              {count}
            </p>
          </div>

          <button className={buttonClass} onClick={decrementCount}>
            <p className="font-2xl font-bold">-</p>
          </button>
        </div>
        {count < 0 && (
          <div className="font-2xl text-red-600">
            <p> Warning ! Count is less than 0</p>
          </div>
        )}
        <button
          className="bg-white w-16 h-10 shadow-2xl rounded-xl hover:bg-amber-100 hover:cursor-pointer"
          onClick={resetCount}
        >
          <p>Reset</p>
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
