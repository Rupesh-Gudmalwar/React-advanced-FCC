import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const increaseCount = () => {
    return setValue((increase) => increase + 1)
  }

  //we can use both approaches , functional as used in increaseCount is more reliable in complex consitions
  // in simple approach as in reset or decrease, "value" take current value 

  const decreaseCount = () => setValue(value - 1)
  const resetCount = () => setValue(0)
  return <>
    <h2>useState counter example</h2>;
    <h1>{value}</h1>
    <button className="btn" onClick={decreaseCount}>Decrease</button>
    <button className="btn" onClick={resetCount}>Reset</button>
    <button className="btn" onClick={increaseCount}>Increase</button>
  </>
};

export default UseStateCounter;
