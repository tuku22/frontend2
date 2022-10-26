import React from "react";
export default function TodoTable(props) {
    return(
        <div>
            <table id='todotable'>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.todos.map((todo, index) =>
                    <tr key={index}>
                        <td>{todo.desc}</td>
                        <td>{todo.date}</td>
                        <td><input type='button' value='Delete' onClick={() => props.setTodos(props.todos.filter((todo, i) => i !== index))} /></td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}