import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import  {AppBar}  from '@mui/material';
import {Toolbar} from '@mui/material';
import {Grid} from '@mui/material';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from 'react-uuid';

function TodoApp(){
    const initialTodos=[
        {id:1,task:"Clean Fishtank",completed:false},
        {id:2,task:"Wash Car",completed:true},
        {id:3,task:"Grow Beard",completed:false}
    ]
const [todos,setTodos]=useState(initialTodos)
const addTodo=newTodoText=>{
    setTodos([...todos,{id:uuid(),task:newTodoText,completed:false}])
}
const removeTodo=todoId=>{
    //filter out remove todo
const updatedTodos=todos.filter(todo=>todo.id!==todoId);
    //call setTodos with new Todos array
    setTodos(updatedTodos)
}
const toggleTodo=todoId=>{
    const updatedTodos=todos.map(todo=>
        todo.id===todoId ? {...todo, completed:!todo.completed}:todo
    )
    setTodos(updatedTodos)
}
const editTodo=(todoId,newTask)=>{
    const updatedTodos=todos.map(todo=>
        todo.id===todoId ?{...todo,task:newTask}:todo
        )
        setTodos(updatedTodos)
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
        <Grid container justifyContent='center' style={{marginTop:"1rem"}}>
            <Grid item xs={11} md={8} lg={4}>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
        </Grid>
        </Grid>
       </Paper>

      
    )
}
export default TodoApp;