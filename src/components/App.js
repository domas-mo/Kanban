import React, { useEffect, useState } from 'react';
import useStorage from '../localStorage';
import { columnList} from '../data';
import { ColumnContext, TaskContext, MoveTask } from '../context/context';
import Board from '../components/Board';
import Form from '../components/Form';

function App() {
  const [getItem, setItem] = useStorage();
  const [tasks, setTask] = useState(getItem('tasks') || []);

  useEffect(() => {
    setItem(columnList, 'columns');
  });

  useEffect(() => {
    setItem(tasks, 'tasks');
  }, [tasks, setItem]);

  const handleSubmit = (e, task) => {
    e.preventDefault();
    const firstColumnID = 1
    if(checkLimit(firstColumnID)) {
      const maxTaskId = Math.max(...tasks.map((t) => t.id), 0);
      const id = maxTaskId + 1;
      const newTask = {...task, id , idColumn: 1}
      setTask([...tasks, newTask]);
    } else {
      window.alert('Nie ma miejsca w tej kolumnie!')
    }
  };

  const countTasksinColumn = (columnId) => {
    return tasks.filter((task) => task.idColumn === columnId).length;
  };

  const checkLimit = (idColumn) => {
    const columns = getItem('columns');
    for (let i = 0; i < columns.length; i++) {
        if (idColumn === columns[i].id) {
          if (countTasksinColumn(idColumn) < columns[i].limit) {
            return true;
          }
        } 
      }
    };
    
      const nextButton = (idColumn, id) => {
        const newTasks = tasks.map((task) => {
          if (task.id === id) {
            return { ...task, idColumn: task.idColumn + 1 };
          }
          return task;
        });
    
        setTask(newTasks);
      };

      const backwardButton = (idColumn, id) => {
        const newTasks = tasks.map((task) => {
          if (task.id === id) {
            return { ...task, idColumn: task.idColumn - 1 };
          }
          return task;
        });
    
        setTask(newTasks);
      };
    
      const moveTask = (e, id, idColumn) => {
        if (e.target.name === 'next' && checkLimit(idColumn + 1)) {
          nextButton(idColumn, id);
        } else if (e.target.name === 'backward' && checkLimit(idColumn - 1)) {
          backwardButton(idColumn, id); 
        } else if (idColumn < 7) {
          window.alert('Nie ma miejsca w tej kolumnie!')
        } 
      };

      return (
      <ColumnContext.Provider value={getItem('columns') || []}>
            <TaskContext.Provider value={tasks}>
          <MoveTask.Provider value={moveTask}>
            <Board />
          </MoveTask.Provider>
        </TaskContext.Provider>
        <Form handleSubmitForm={(e, state) => handleSubmit(e, state)} />
      </ColumnContext.Provider>
  );
}

export default App;