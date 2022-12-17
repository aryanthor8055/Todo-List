import React from 'react'
import { Paper } from '@mui/material'
import { List } from '@mui/material'

import { Divider } from '@mui/material'

import Todo from './Todo'

function TodoList({todos,removeTodo,toggleTodo,editTodo}){
    return (
<Paper>
    <List>
    {todos.map(todo=>(
        <>
        <Todo task={todo.task}
        id={todo.id}
        key={todo.id} 
        completed={todo.completed}
        // deleteTodo={deleteTodo}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        />
        <Divider/>
        </>
    )

    )}
    </List>
</Paper>
    )
}
export default TodoList