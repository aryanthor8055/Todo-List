import React from 'react'
import { Paper } from '@mui/material'
import { List } from '@mui/material'

import { Divider } from '@mui/material'

import Todo from './Todo'

function TodoList(props){
    return (
<Paper>
    <List>
    {props.todos.map(todo=>(
        <>
        <Todo task={todo.task} key={todo.id} completed={todo.completed}/>
        <Divider/>
        </>
    )

    )}
    </List>
</Paper>
    )
}
export default TodoList