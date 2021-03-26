import React, {useState} from 'react'
import { Box, HStack} from '@chakra-ui/react';
import { CheckIcon, EditIcon } from '@chakra-ui/icons'
import TodoForm from './TodoForm';

function Todo({todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id:null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({id: null, value:''})
    }

    if (edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
    return (
       
      <Box>
           {todos.map((todo, index) => (
                <Box className={todo.isCompleted ? 'todo-row complete' : 'todo-row'} key={index}>
                    <HStack justifyContent="space-between" margin="16px 0"> 
                    
                    <Box
                    w="400px"
                    p="16px"
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="5px"
                    h="42px"
                    key={todo.id}
                    display="flex"
                    alignItems="center"
                    onClick={() => completeTodo(todo.id)}>
                        {todo.text}
                    </Box>

                    <Box className="icons">
                        <CheckIcon 
                        
                        onClick={() => removeTodo(todo.id)}
                        className="delete-icon"/>
                    </Box>

                    <Box className="icons">
                    <EditIcon onClick={() =>setEdit({id: todo.id, value: todo.text})}
                        className="edit-icon"/>
                    </Box>
                    
                    </HStack>
                </Box>
            ))}
      </Box>
    )
}

export default Todo
