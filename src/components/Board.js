import React, { useContext } from 'react';
import Column from './Column';
import { ColumnContext } from '../context/context';

const divStyle = {
  width: '100%',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#3B3F4A'
};

const sectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const Board = () => {
  const columnsArray = useContext(ColumnContext);
  const columns = columnsArray.map((column) => {

    return (
      <Column
        name={column.name}
        key={column.id}
        limit={column.limit}
        columndId={column.id}
      />
    );
  });
  
  return (
    <>
      <div style={divStyle}>
        <header style={headerStyle}>
          <h1>Tablica Kaban</h1>
        </header>
        <section style={sectionStyle}>{columns}</section>
      </div>
    </>
  );
};

export default Board;