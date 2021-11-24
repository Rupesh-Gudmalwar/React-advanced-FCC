import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const usersData = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
    console.log(users)
  }

  useEffect(() => {
    usersData()
  }, [])


  return <>
    <h1>Github users</h1>
    <ul className="users">
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user
        return <>
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>

              <h4>{login}</h4>
              <a href={html_url}>profile</a>
            </div>
          </li>

        </>
      })}
    </ul>
    {/* <h2>fetch data</h2> */}
  </>



};

export default UseEffectFetchData;
