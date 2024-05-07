import { useState, useEffect } from 'react';
import { Container, VStack, Input, Button, List, ListItem, ListIcon, IconButton } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      const newTasks = [...tasks, inputValue];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      setTasks(newTasks);
      setInputValue('');
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
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