import React from 'react';
import {
  ChakraProvider,
   VStack,
   theme,
} from '@chakra-ui/react';
import TodoList from './components/TodoList';
import { ColorModeSwitcher } from './ColorModeSwitcher';



function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" /> 
       <VStack justifyContent="center" alignItems="center">
      <TodoList />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
