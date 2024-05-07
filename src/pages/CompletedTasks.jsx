import { Container, List, ListItem, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const CompletedTasks = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const tasks = JSON.parse(storedTasks);
      setCompletedTasks(tasks.filter(task => task.completed));
    }
  }, []);

  return (
    <Container centerContent maxW="container.md" p={4}>
      <VStack spacing={4} w="100%">
        <List spacing={3} w="100%">
          {completedTasks.length > 0 ? (
            completedTasks.map((task, index) => (
              <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center" textDecoration='line-through'>
                {task.text}
              </ListItem>
            ))
          ) : (
            <ListItem>No completed tasks</ListItem>
          )}
        </List>
      </VStack>
    </Container>
  );
};

export default CompletedTasks;