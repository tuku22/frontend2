import React from 'react';
import { useState } from 'react';
import './App.css';
import Todolist from './Components/Todolist';

export default function App() {
  const [todo, setTodo] = useState({desc: '', date: ''})
  const [todos, setTodos] = useState([])

  const inputChanged = (e) => {
    setTodo({...todo, [e.target.name]: e.target.value})
  }

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, todo])
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <p>Date: </p>
        <input type ='date' name ='date' value={todo.date} onChange={inputChanged}/>
        <p>Description: </p>
        <input type ='text' name ='desc' value={todo.desc} onChange={inputChanged}/>
        <input type='submit' value='Add' />
      </form>
      <Todolist todos={todos} />
    </div>
  );
}