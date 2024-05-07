import { useState, useEffect } from 'react';
import { Container, VStack, Input, Button, List, ListItem, ListIcon, IconButton } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks).map(task => ({ text: task, completed: false })));
    }
  }, []);

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      const newTasks = [...tasks, { text: inputValue, completed: false }];
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

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
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
            <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center" textDecoration={task.completed ? 'line-through' : 'none'}>
              {task.text}
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                onClick={() => handleRemoveTask(index)}
              />
              <Button onClick={() => toggleTaskCompletion(index)}>{task.completed ? 'Mark Incomplete' : 'Mark Complete'}</Button>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;