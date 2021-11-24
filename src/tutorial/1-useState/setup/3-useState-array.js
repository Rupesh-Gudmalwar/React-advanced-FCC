import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  let [people, setPeople] = React.useState(data)
  let removeName = (name) => {
    let namesI = people.filter((names) => names.name !== name)
    setPeople(namesI)
  }
  return <>
    {
      people.map((person) => {
        let { id, name } = person
        return <div key={id} className="item">
          <h4>{name}</h4>
          <button type="button" className="btn" onClick={() => removeName(name)}>Remove individual items</button>
        </div>
      })
    }
    <button type="button" className="btn" onClick={() => setPeople([])}>clear items</button>
  </>;
};

export default UseStateArray;
