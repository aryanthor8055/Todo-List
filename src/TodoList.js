import React from 'react'
import { Paper } from '@mui/material'
import { List } from '@mui/material'

import { Divider } from '@mui/material'

import Todo from './Todo'

function TodoList({todos,removeTodo,toggleTodo,editTodo}){
    if(todos.length)
    return (
       
<Paper>
    <List>
    {todos.map((todo,i)=>(
        <>
        <Todo 
     {...todo}
        key={todo.id} 
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        />
       {i<todos.length -1 && <Divider/>}
        </>
    )

    )}
    </List>
</Paper>
    )
    return null;
}
export default TodoList