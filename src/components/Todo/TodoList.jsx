import React from 'react'
import { HStack, IconButton, VStack, Text, StackDivider, Spacer } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa';

const boxStyle = {
    borderWidth: '2px',
    borderColor: 'gray.500',
    p: '4',
    w: '100%',
    borderRadius: 'lg',
    maxW: ['90vw', '80vw', '50vw', '50vw'],
    alignItems: 'stretch'
}
const TodoList = ({ todos, deleteTodo }) => {

    return (
        <VStack sx={boxStyle} divider={< StackDivider />}>
            {todos.length > 0 ? todos.map((todo) => (
                <HStack key={todo.id} >
                    <Text textAlign='left'>{todo.message}</Text>
                    <Spacer />
                    <IconButton icon={<FaTrash />} isRound='true' colorScheme='pink' variant='outline' onClick={() => deleteTodo(todo.id)} />
                </HStack>
            )) : <Text color='purple' fontSize='20' fontWeight='bold' >No Todos 😋🏋️‍♂️🏋️‍♂️. Enjoy!!</Text>}
        </VStack>
    )
}

export default TodoList