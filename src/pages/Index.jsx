import { useState } from 'react';
import { Container, VStack, Input, Button, List, ListItem, ListIcon, IconButton } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" p={4}>
      <VStack spacing={4} w="100%">
        <Input
          placeholder="Add a new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
        />
        <Button onClick={handleAddTask} colorScheme="blue">Add Task</Button>
        <List spacing={3} w="100%">
          {tasks.map((task, index) => (
            <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
              {task}
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                onClick={() => handleRemoveTask(index)}
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;