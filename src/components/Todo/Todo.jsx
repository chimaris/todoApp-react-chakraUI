import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import { Heading, VStack, Box, IconButton, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from "react-icons/fa";

const boxStyle = {
    mt: '20px',
    border: '2px solid pink',
    maxW: '5xl',
    mx: 'auto',
    p: '4',
}
const headingStyle = {
    fontSize: ['20px', '20px', '40px'],
    mb: '8', // 8 * 4px = 32px
    fontWeight: 'extrabold',
    bgGradient: 'linear(to-l, pink.500, pink.300, purple.500)',
    bgClip: 'text'
}

const Todo = () => {
    // const initialTodos = [
    //     { id: 1, message: 'Learn Chakra UI' },
    //     { id: 2, message: 'Eat Egusi soup' },
    //     { id: 3, message: 'Learn React Redux' },
    //     { id: 4, message: 'Practice more on React Redux' },
    // ];

    const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const addTodo = (todo) => {
        console.log(todo);
        setTodos([todo, ...todos]);
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => {
            return todo.id !== id;
        })
        setTodos(newTodos);
    }

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box sx={boxStyle}>
            <VStack>
                <IconButton icon={colorMode === 'light' ? <FaMoon /> : <FaSun />} isRound='true' alignSelf='flex-end' colorScheme='purple' size='lg' variant='outline' onClick={toggleColorMode} />
                <Heading sx={headingStyle}>Todo Application</Heading>
                <AddTodo addTodo={addTodo} todos={todos} />
                <TodoList todos={todos} deleteTodo={deleteTodo} />
            </VStack>
        </Box>
    )
}

export default Todo