import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [people, setpeople] = useState([])


  const handleSubmit = (e) => {
    if (name && email) {
      const people = { name, email }
      console.log(people)
      setpeople((people) => {
        return [...people, people]
      })
    }
    e.preventDefault()
    console.log(name, email)
  }

  return <>
    {/* <h1>controlled inputs</h1>; */}
    <form action="/" className="form">
      <div className="form-control">
        <label htmlFor="name">Name :</label>
        <input type="text" name="name" placeholder="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email :</label>
        <input type="email" name="email" placeholder="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    {people.map((person) => {
      const { id, name, email } = person
      return <div className="item" key={id}>
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
    })
    }
  </>
};

export default ControlledInputs;
