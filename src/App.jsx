import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { Text, Flex, Box } from '@chakra-ui/react';
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Flex direction="column" minHeight="100vh">
      <Box bg="brand.700" w="100%" p={4} color="white">
        <Flex justify="center" align="center">
          <Text fontSize="xl" fontWeight="bold">Todo App</Text>
          <Link to="/completed" style={{ color: 'white', marginLeft: '20px', textDecoration: 'none' }}>Completed Tasks</Link>
        </Flex>
      </Box>
      <Router style={{ marginTop: '64px', flex: "1" }}>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Router>
      <Box bg="brand.700" w="100%" p={4} color="white" mt="auto">
        <Flex justify="center" align="center">
          <Text fontSize="sm">© {new Date().getFullYear()} Todo App. All rights reserved.</Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;