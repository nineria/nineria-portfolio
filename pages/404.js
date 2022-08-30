import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const NotFound = () => {
  return (
    <Container>
      <Heading as='h1'>Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align='center'>
        <NextLink href='/' passHref>
          <Button
            colorScheme={useColorModeValue('red', 'purple')}
            color='white'
            bgColor={useColorModeValue('red.400', 'purple.400')}
          >
            Return to home
          </Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
