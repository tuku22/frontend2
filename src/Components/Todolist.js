import React from 'react';
import TodoTable from './TodoTable';
import { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react'; 
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-material.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {MuiPickersUtilsProvider, DatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

export default function Todolist() {


  const [todo, setTodo] = useState({
    desc: '',
    date: '',
    priority: ''
  });
  const [todos, setTodos] = useState([]);

  const gridRef = useRef();

  const [columnDefs] = useState([
    {field: 'description', sortable:true, filter:true},
    {field: 'date', sortable: true, filter:true},
    {field: 'priority', sortable:true, filter:true,
  cellStyle: params => params.value === 'High' ? {color: 'red'} : {color: 'black'} }
  ]);

  const inputChanged = (event) => {
    setTodo({
      ...todo, [event.target.name]: event.target.value
    });
   }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    console.log(todos.indexOf + " added");
  }

  const deleteTodo = () => {
  setTodos(
   todos.filterconsole.log((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex)
  )
  }

  return (  
  <div className = 'App' >
  <div className = 'form' >
  
<Stack direction="row" spacing={2} justifyContent="center" alignItems="center">

<TextField
label="Description"
variant='standard'
name="description" 
value={todo.description} 
onChange={inputChanged}>    
/</TextField>


<LocalizationProvider dateAdapter={AdapterDayjs}>
  <Stack spacing={3}>
    <DesktopDatePicker
    label="Date"
    value={todo.date}
    onChange={value => setTodo({...todo, date: value})} 
    renderInput={(params) => <TextField {...params} /> }
    /> 
    </Stack>
</LocalizationProvider>



<TextField
  label="Priority"
  variant='standard'
  name="priority"
  value={todo.priority} 
  onChange={inputChanged}/>
   
<Button onClick={addTodo} variant="contained">Add</Button>
<Button onClick={deleteTodo} variant="contained">Delete</Button>
</Stack>
<div className='ag-theme-material' style={{margin:'auto', width:'60%', height: 600}}>

<AgGridReact
ref={gridRef}
onGridReady={params => gridRef.current = params.api}
rowSelect = 'single'
rowData={todos}
columnDefs={columnDefs}
></AgGridReact>

</div>
</div> 
    

    </div>
  );
}