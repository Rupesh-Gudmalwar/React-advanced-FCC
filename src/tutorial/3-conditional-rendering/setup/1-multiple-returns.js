import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('deafault user')

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((user) => {
        const {

        })
      .catch((error) => console.log(error))
  }, [])
  if (isLoading) {
    return <h2>Loading...</h2>;
  } if (isError) {
    return <h2>Error...</h2>;
  }
  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
