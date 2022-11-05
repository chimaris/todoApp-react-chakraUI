import { Button, HStack, Input } from '@chakra-ui/react'
import React, { useRef } from 'react'

const AddTodo = ({ addTodo, todos }) => {
    const message = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        if (message.current.value.trim().length > 5) {
            addTodo({
                id: Math.trunc(Math.random() * 100),
                message: message.current.value,
            });
        } else {
            message.current.focus();
        }

        message.current.value = '';
    }
    return (
        <form onSubmit={submitHandler}>
            <HStack mt='8' mb='8'>
                <Input variant='filled' size='lg' placeholder='Write your todo' ref={message} />
                <Button type='submit' size='lg' colorScheme='purple' px='8'>Add Todo</Button>
            </HStack>
        </form>

    )
}

export default AddTodo