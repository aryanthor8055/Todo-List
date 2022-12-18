import { useState } from "react"
import uuid from 'react-uuid';

export default initialTodos=>{
    const [todos,setTodos]=useState(initialTodos);


    return {
        todos,
        addTodo:newTodoText=>{
            setTodos([...todos,{id:uuid(),task:newTodoText,completed:false}])
        },
        removeTodo:todoId=>{
            //filter out remove todo
        const updatedTodos=todos.filter(todo=>todo.id!==todoId);
            //call setTodos with new Todos array
            setTodos(updatedTodos)
        },
        toggleTodo:todoId=>{
            const updatedTodos=todos.map(todo=>
                todo.id===todoId ? {...todo, completed:!todo.completed}:todo
            )
            setTodos(updatedTodos)
        },
        editTodo:(todoId,newTask)=>{
            const updatedTodos=todos.map(todo=>
                todo.id===todoId ?{...todo,task:newTask}:todo
                )
                setTodos(updatedTodos)
        }
    }
}


