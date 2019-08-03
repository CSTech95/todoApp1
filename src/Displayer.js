import React, { useEffect } from 'react';

let style = {
  border: '2px solid black'
};

export default ({ stateFromApp }) => {
  useEffect(() => console.log(stateFromApp));
  return (
    <div style={style}>
      <h1>My Displayer component</h1>
      <p>{stateFromApp}</p>
    </div>
  );
};
