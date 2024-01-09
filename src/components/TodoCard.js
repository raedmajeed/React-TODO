import React from 'react';

const TodoCard = (props) => {
  const { todo, onDelete, onEdit, onComplete } = props;

  return (
    <div className='todoCardContainer'>
      <div key={todo.index}>
        {todo.value}
      </div>
      <div>
        <button className='btn' onClick={() => onDelete(todo.index)}>
          DELETE
        </button>
        <button className='btn' onClick={() => onEdit(todo.index)}>
          EDIT
        </button>
        <button onClick={() => onComplete(todo.index)}>
          COMPLETE
        </button>
      </div>
    </div>
  )
}

export default TodoCard