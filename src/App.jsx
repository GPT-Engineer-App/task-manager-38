import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Text } from '@chakra-ui/react';
import Index from "./pages/Index.jsx";

function App() {
  return (
    <>
      <Box bg="brand.700" w="100%" p={4} color="white">
        <Flex justify="center" align="center">
          <Text fontSize="xl" fontWeight="bold">Todo App</Text>
        </Flex>
      </Box>
      <Router style={{ marginTop: '64px' }}>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;