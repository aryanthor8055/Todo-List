import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import  {AppBar}  from '@mui/material';
import {Toolbar} from '@mui/material';
import Grid from '@mui/material';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp(){
    const initialTodos=[
        {id:1,task:"Clean Fishtank",completed:false},
        {id:2,task:"Wash Car",completed:true},
        {id:3,task:"Grow Beard",completed:false}
    ]
const [todos,setTodos]=useState(initialTodos)
const addTodo=newTodoText=>{
    setTodos([...todos,{id:'4',task:newTodoText,completed:false}])
}
    return(
       <Paper style={{
        padding:0,
        margin:0,
        height:"100vh",
        backgroundColor:"#fafafa"
       }}
       elevation={0}
       >
        <AppBar color='primary' position='static' style={{height:"64px"}}>
            <Toolbar>
                <Typography color='inherit'>TODOS WITH HOOKS</Typography>
            </Toolbar>
        </AppBar>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos}/>
       </Paper>

      
    )
}
export default TodoApp;