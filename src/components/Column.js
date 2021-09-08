import React, { useContext } from 'react';
import { TaskContext} from '../context/context';
import Task from './Task';

const divStyle = {
  margin: '1px',
  paddingBottom: '20px',
  backgroundColor: '#5A9BAD',
  color: '#fff',
  flex: '1 2 auto',
  textAlign: 'center',
};

const h2Style = {
  color: 'ffff',
};

const headerStyle = {
  backgroundColor: '#4F5D61',
  width: '100%',
  padding: '0.2rem 0',
};

const Column = ({ name, id, columndId }) => {
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
      </header>
      <div>
        <div>{addedTask}</div>
      </div>
    </div>
  );
};

export default Column;