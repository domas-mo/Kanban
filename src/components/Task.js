import React, { useContext } from 'react';
import { MoveTask } from './../context/context';

const buttonStyle = {
  padding: '5px',
  borderRadius: '10px',
  margin: '2px',
  width: '100px',
  cursor: 'pointer',
  border: 'none'
};

const Task = (props) => {
  const { name, toDo, userName, id, idColumn } = props;

  const moveTask = useContext(MoveTask);

  return (
    <div key={id}>
      <h3>{name}</h3>
      <p>{toDo}</p>
      <p>{userName}</p>
      <button
        style={buttonStyle}
        type="button"
        name="backward"
        onClick={(e) => moveTask(e, id, idColumn)}
      >
        Wstecz
      </button>
      <button
        style={buttonStyle}
        type="button"
        name="next"
        onClick={(e) => moveTask(e, id, idColumn)}
      >
        Naprzód
      </button>
    </div>
  );
};
export default Task;