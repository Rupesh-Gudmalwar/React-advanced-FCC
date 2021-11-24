import React, { useState } from 'react';

const UseStateBasics = () => {

  const [value, setValue] = useState('random title')

  const handleClick = () => {
    if (value === "random title") {
      setValue("hello world")
    } else {
      setValue("random title")
    }
  }
  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>Change title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
