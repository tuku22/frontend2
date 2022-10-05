import React, { useState } from 'react';
import './App.css';
import Todolist from './Components/Todolist';

function App() {


  return (
    
    <div className="Aop">
      <Todolist />
    </div>
  );
}

export default App;


/* <form onSubmit={addTodo}>
<p>Date: </p>
<input type ='date' name ='date' value={todo.date} onChange={inputChanged}/>
<p>Description: </p>
<input type ='text' name ='desc' value={todo.desc} onChange={inputChanged}/>
<input type='submit' value='Add' />
</form> */