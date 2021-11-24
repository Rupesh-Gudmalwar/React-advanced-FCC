import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [value, setValue] = useState(window.innerWidth)

  const resizing = () => setValue(window.innerWidth)

  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('resize', resizing)
    return (
      () => {
        console.log('returned')
        window.removeEventListener('resize', resizing)
      }
    )
  })


  return <>
    <h1>Window is :</h1>
    <h2>{value} px</h2>
  </>;
};

export default UseEffectCleanup;
