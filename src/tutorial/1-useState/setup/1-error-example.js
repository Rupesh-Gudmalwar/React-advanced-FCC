import React from 'react';

const ErrorExample = () => {
  let title = "Random title"
  const clickHandler = () => {
    title = "Hello world"
    console.log(title)
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={clickHandler}>Change title</button>

    </React.Fragment>
  );

};

export default ErrorExample;
