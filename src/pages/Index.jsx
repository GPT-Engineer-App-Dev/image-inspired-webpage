import { Container, Text, VStack, Box, Image, Heading, Flex, IconButton, HStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="red.600" color="white" py={20} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>Welcome to Stopwatch Landing Page</Heading>
        <Text fontSize="xl">Track your time with precision and style</Text>
      </Box>

      <Box py={10} textAlign="center">
        <Image src="/images/stopwatch.png" alt="Stopwatch" mx="auto" boxSize="300px" />
      </Box>

      <Box py={10} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Digital Clock Display</Heading>
        <Text fontSize="6xl" fontFamily="monospace">12:34:56</Text>
      </Box>

      <Box py={10} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Features</Heading>
        <VStack spacing={4}>
          <Text fontSize="lg">High precision timing</Text>
          <Text fontSize="lg">Easy to use interface</Text>
          <Text fontSize="lg">Durable and reliable</Text>
        </VStack>
      </Box>

      <Box py={10} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>How it Works</Heading>
        <VStack spacing={4}>
          <Text fontSize="lg">Press start to begin timing</Text>
          <Text fontSize="lg">Press stop to end timing</Text>
          <Text fontSize="lg">Press reset to clear the timer</Text>
        </VStack>
      </Box>

      <Box py={10} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Contact Us</Heading>
        <Text fontSize="lg">Email: info@stopwatch.com</Text>
        <Text fontSize="lg">Phone: (123) 456-7890</Text>
      </Box>

      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="center">
          <HStack spacing={4}>
            <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;