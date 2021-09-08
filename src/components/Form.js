import React, { useReducer } from 'react';

const divStyle = {
  backgroundColor: '#4F5D61',
  width: '100%'
};

const formStyle = {
  margin: 'auto',
  padding: '1rem',
  backgroundColor: '#4F5D61',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row',
  width: '50%',
};

const inputTextStyle = {
  display: 'block',
  margin: '0 auto',
  padding: '0.5rem',
};

const inputSubmitStyle = {
  marginTop: '1rem',
  padding: '10px',
  borderRadius: '10px',
  width: '100px',
  cursor: 'pointer',
  border: 'none'
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
        <input type="submit" value="Wyślij" style={inputSubmitStyle} />
      </form>
    </div>
  );
};

export default Form;