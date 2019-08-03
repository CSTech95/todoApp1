import React, { useState } from 'react';
import Clearbtn from './Clearbtn';
const uuidv4 = require('uuid/v4');

export default ({ stateFromApp }) => {
  // console.log(stateFromApp);
  const [input, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    setTodos([...todos, input]);
    if (input === '') {
      console.log('empty string');
    }
    console.log(todos);
    setInputValue('');
  };

  let clearNow = () => {
    setTodos([]);
    console.log('Cleared');
  };
  const handleInputChange = e => {
    setInputValue(e.target.value);
    // document.title = e.target.value;
  };

  let linedT = e => {
    e.target.style.color = 'red';
    // e.target.style.display = 'none';
    // e.target.style.background = 'pink';
    e.target.style.textDecoration = 'line-through';
  };
  let style = {
    background: 'pink'
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onClick={e => (e.target.style.background = 'white')}
          style={style}
          value={input}
          onChange={handleInputChange}
        />
      </form>
      <Clearbtn clearNow={clearNow} />
      {todos.map(todo => (
        <li onClick={linedT} key={uuidv4()}>
          {todo}
        </li>
      ))}
    </>
  );
};
