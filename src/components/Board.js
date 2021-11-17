import React, { useContext } from 'react';
import Column from './Column';
import { ColumnContext } from '../context/context';

const divStyle = {
  width: '100%',
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
        <section style={sectionStyle}>{columns}</section>
      </div>
    </>
  );
};

export default Board;