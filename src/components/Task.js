import React, { useContext } from 'react';
import { MoveTask } from './../context/context';

const buttonStyle = {
  padding: '5px',
  borderRadius: '10px',
  margin: '2px',
  width: '100px',
  cursor: 'pointer',
  border: 'none',
  fontFamily: '"Roboto", sans-serif',
  backgroundColor: '#06A6FF',
  color: '#ffff'
};

const divStyle = {
  margin: '10px 0px',
  padding: '10px',
  borderRadius: '10px',
  backgroundColor: '#DDE4E5',
  fontSize: '15px'
}

const Task = (props) => {
  const { name, toDo, userName, id, idColumn } = props;
  const moveTask = useContext(MoveTask);

  return (
    <div style={divStyle} key={id}>
      <h3>{name}</h3>
      <p>{toDo}</p>
      <p>{userName}</p>
      <button
        style={buttonStyle}
        type="button"
        onClick={(e) => moveTask(e, id, idColumn, 'prev')}
      >
        Wstecz
      </button>
      <button
        style={buttonStyle}
        type="button"
        onClick={(e) => moveTask(e, id, idColumn, 'next')}
      >
        Naprzód
      </button>
    </div>
  );
};
export default Task;