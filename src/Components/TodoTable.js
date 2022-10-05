import React from 'react';
import Todolist from './Todolist';

export default function TodoTable (props){



return(
<div>
  <table className = "table">
   <tbody>
     <tr><th>Date:</th><th>Desctiption:</th></tr>
     {
       props.todos.map((todo, index) =>
       <tr key={index}>
         <td>{todo.date}</td>
         <td>{todo.description}</td>
         <td><input type="button" value="Delete" onClick={() => props.setTodos(props.todos.filter((todo, i) => i !== index))} /></td>
       </tr>
      ) 
     }
   </tbody>
  </table>    
</div>

    );


}