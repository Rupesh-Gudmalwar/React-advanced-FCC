import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  console.log("okay")

  useEffect(() => {
    console.log('use effect called')
    if (value > 1) {

      document.title = `new messages (${value})`
    }
  }, [value])

  return <>
    <div>{value}</div>
    <button className="btn" onClick={() => setValue(value + 1)}>Increase</button>

    {/* <h2>useEffect Basics</h2>; */}
  </>

};

export default UseEffectBasics;
