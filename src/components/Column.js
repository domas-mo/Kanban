import React, { useContext } from 'react';
import { TaskContext} from '../context/context';
import Task from './Task';

const divStyle = {
  margin: '0px 2px',
  flex: '1 2 auto',
  textAlign: 'center',
  fontFamily: '"Roboto", sans-serif',
  borderRadius: '10px',
};

const h2Style = {
  color: 'ffff',
};

const headerStyle = {
  backgroundColor: '#01987A',
  color: '#ffff',
  width: '100%',
  padding: '0.2rem 0',
  fontSize: '12px',
  fontFamily: '"Roboto", sans-serif',
  borderRadius: '10px'
};

const Column = ({ name, limit, id, columndId }) => {
  const tasks = useContext(TaskContext);

  const filteredTask = tasks.filter((task) => task.idColumn === columndId);
  const addedTask = filteredTask.map((task) => {
    
    return (
      <Task
        key={task.id}
        id={task.id}
        name={task.taskName}
        userName={task.user}
        toDo={task.toDo}
        idColumn={task.idColumn}
      />
    );
  });

  return (
    <div style={divStyle} key={id}>
      <header style={headerStyle}>
        <h2 style={h2Style}>{name}</h2>
        <p>Limit: {limit}</p>
      </header>
      <div>
        <div>{addedTask}</div>
      </div>
    </div>
  );
};

export default Column;