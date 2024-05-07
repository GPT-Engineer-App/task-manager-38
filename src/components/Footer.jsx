import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" width="100%" p={4} bg="brand.700" color="white" textAlign="center">
      <Text>© {new Date().getFullYear()} Todo App. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;