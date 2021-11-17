import React, { useReducer } from 'react';

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '"Roboto", sans-serif',
  width: '100%',
  backgroundColor: '#DDE4E5',
  borderRadius: '10px'
};

const divStyle = {
  backgroundColor: '#DDE4E5',
  width: '100%',
  marginBottom: '10px',
  borderRadius: '10px'
};

const formStyle = {
  margin: 'auto',
  padding: '1rem',
  backgroundColor: '#DDE4E5',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row',
  width: '50%',
  fontFamily: '"Roboto", sans-serif',
};

const inputTextStyle = {
  display: 'block',
  margin: '0 auto',
  padding: '0.5rem',
  borderRadius: '10px',
  border: 'none'
};

const inputSubmitStyle = {
  marginTop: '1rem',
  padding: '10px',
  borderRadius: '10px',
  width: '100px',
  cursor: 'pointer',
  border: 'none',
  fontFamily: '"Roboto", sans-serif',
  backgroundColor: '#06A6FF',
  color: '#ffff'
};

const Form = (props) => {
  const init = {
    taskName: '',
    user: '',
    toDo: '',
  };

  const reducer = (state, { name, value }) => {
    return { ...state, [name]: value };
  };
  
  const [state, dispatch] = useReducer(reducer, init);
  const { taskName, user, toDo } = state;

  const resetInputs = () => {
    dispatch({ name: "taskName", value: "" });
    dispatch({ name: "user", value: "" });
    dispatch({ name: "toDo", value: "" });
  };
  
  return (
    <div style={divStyle}>
      <header style={headerStyle}>
          <h1>Tablica Kanban</h1>
        </header>
      <form style={formStyle} onSubmit={(e) => props.handleSubmitForm(e, state, resetInputs())}>
        <label htmlFor="task">
          Nazwa zadania:
          <input
            style={inputTextStyle}
            type="text"
            name="taskName"
            value={taskName}
            onChange={(e) => dispatch(e.target)}
            required
          />
        </label>
        <label htmlFor="user">
          Użytkownik:
          <input
            style={inputTextStyle}
            type="text"
            name="user"
            value={user}
            onChange={(e) => dispatch(e.target)}
            required
          />
        </label>
        <label htmlFor="user">
          Do zrobienia:
          <input
            style={inputTextStyle}
            type="text"
            name="toDo"
            value={toDo}
            onChange={(e) => dispatch(e.target)}
            required
          />
        </label>
        <input type="submit" value="Dodaj" style={inputSubmitStyle} />
      </form>
    </div>
  );
};

export default Form;