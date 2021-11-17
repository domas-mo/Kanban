import React, { useEffect, useState } from 'react';
import useStorage from '../useStorage';
import { columnList} from '../data';
import { ColumnContext, TaskContext, MoveTask } from '../context/context';
import Board from '../components/Board';
import Form from '../components/Form';

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '"Roboto", sans-serif',
  width: '100%',
  backgroundColor: '#DDE4E5',
};

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

      const prevButton = (idColumn, id) => {
        const newTasks = tasks.map((task) => {
          if (task.id === id) {
            return { ...task, idColumn: task.idColumn - 1 };
          }
          return task;
        });
    
        setTask(newTasks);
      };
    
      const moveTask = (e, id, idColumn, direction) => {
        if (direction === 'next' && checkLimit(idColumn + 1)) {
          nextButton(idColumn, id);
        } else if (direction === 'prev' && checkLimit(idColumn - 1)) {
          prevButton(idColumn, id); 
        } else if (idColumn < 7) {
          window.alert('Nie ma miejsca w tej kolumnie!')
        } else if (idColumn === 7) {
          nextButton(idColumn, id)
          window.localStorage.removeItem(e.target)
        }
      }

      return (
      <ColumnContext.Provider value={getItem('columns') || []}>
        <Form handleSubmitForm={(e, state) => handleSubmit(e, state)} />
        <TaskContext.Provider value={tasks}>
          <MoveTask.Provider value={moveTask}>
            <Board />
          </MoveTask.Provider>
        </TaskContext.Provider>
      </ColumnContext.Provider>
  );
}

export default App;