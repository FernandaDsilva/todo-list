import React, { useState, useEffect, useRef } from 'react';
import { Button, Input, Box } from '@chakra-ui/react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <Box width="500px" p="8px 16pxs">
      <Box
        as="form"
        className="todo-form"
        isRequired
        onSubmit={handleSubmit}
        display="flex"
      >
        <Input
          type="text"
          placeholder="First Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
          mr="8px"
        />

        <Button type="submit" className="todo-button">
          Add todo
        </Button>
      </Box>
    </Box>
  );
}

export default TodoForm;
