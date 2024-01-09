import React, { useState } from 'react';
import TodoCard from './TodoCard';
import { v4 as uuidv4 } from 'uuid';

const MainSearchBox = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoItemList, setTodoItemList] = useState([]);

  const addToLoist = (todoitem) => {
    setTodoItemList([...todoItemList, todoitem])
  }

  const updateList = (value, index) => {
    console.log(value, index);
  }

  const onDelete = (index) => {
    setTodoItemList(todoItemList.filter((v, i) => i !== index));
  }

  const onEdit = (index) => {
    const newValue = prompt("Enter the new value:");
    if (newValue !== null) {
      const updatedList = [...todoItemList];
      updatedList[index] = newValue;
      setTodoItemList(updatedList);
    }
  }

  const onComplete = (index) => {
    const updatedList = [...todoItemList];
    updatedList[index] = <strike>{todoItemList[index]}</strike>;
    setTodoItemList(updatedList);
  }

  return (
    <div className='mainSearchBoxContainer'>
      <input 
        type='text' 
        value={todoItem} 
        onChange={(e) => {
          setTodoItem(e.target.value);
        }}
        className='mainSearchBoxInput'
      />
      <button 
        type='submit' 
        onClick={() => {
          addToLoist(todoItem);
          setTodoItem("");
        }}
        className='mainSearchBoxButton'
      >
        SUBMIT
      </button>
      
      <div key={uuidv4()} className='todo-wrapper'>
        {todoItemList.map((value, index) => {
          return (
            <div>
              <TodoCard
                key={uuidv4()}
                todo={{
                  value: value,
                  index: index,
                  updateList: updateList
                }}
                onDelete={onDelete}
                onEdit={onEdit}
                onComplete={onComplete}
              />
            </div>
          )
        })}
        <div>
        </div>
      </div>
    </div>
  )
}

export default MainSearchBox