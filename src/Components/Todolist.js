import React from 'react';
import TodoTable from './TodoTable';
import { useState } from 'react';

export default function Todolist() {


  const [todo, setTodo] = useState({
    desc: '',
    date: ''
  });
  const [todos, setTodos] = useState([]);

  const inputChangedDesc = (event) => {
    setTodo({
      desc: event.target.value,
      date: todo.date
    });
  }

  const inputChangedDate = (event) => {
    setTodo({
      date: event.target.value,
      desc: todo.desc
    });
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    console.log(todos.indexOf + " added");
  }

  return (  
    <div className = 'App' >
    <div className = 'form' >
    <form onSubmit={addTodo}>
<label>Description:
  <input type="text" name="description" value={todo.description} onChange={inputChangedDesc}></input>
</label>
<label>Date:
  <input type="date" name="date" value={todo.date} onChange={inputChangedDate}/>
</label>
<input type="submit" value="Add" />


    </form>
    </div> 

    <TodoTable todos={todos} setTodos={setTodos}/>
    </div>
  );
}