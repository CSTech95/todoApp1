import React, { useState } from 'react';
import Clearbtn from './Clearbtn';
import './Form.css';
const uuidv4 = require('uuid/v4');

export default ({ stateFromApp }) => {
  const [input, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

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
  };

  let toggleTodo = e => {
    setIsComplete(!isComplete);
  };
  let styleT = {
    color: !isComplete ? 'black' : 'red'
    // e.target.style.textDecoration = 'line-through'
  };
  let style = {
    background: 'pink'
  };
  let logState = () => {
    console.log(isComplete);
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
        <li
          className={isComplete ? 'todoToggled' : 'todo'}
          onClick={toggleTodo}
          key={uuidv4()}
        >
          {todo}
        </li>
      ))}
    </>
  );
};
