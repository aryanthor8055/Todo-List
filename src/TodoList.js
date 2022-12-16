import React from 'react'
import { Paper } from '@mui/material'
import { List } from '@mui/material'
import { ListItem } from '@mui/material'
import { Divider } from '@mui/material'
import { ListItemText } from '@mui/material'

function TodoList(props){
    return (
<Paper>
    <List>
    {props.todos.map(todo=>(
        <>
        <ListItem>
        <ListItemText>{todo.task}</ListItemText>
        </ListItem>
        <Divider/>
        </>
    )

    )}
    </List>
</Paper>
    )
}
export default TodoList