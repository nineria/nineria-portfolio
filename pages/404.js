import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import headingNotFound from '../public/text/not-found.png';

const NotFound = () => {
  return (
    <Container>
      <Heading as='h1'>
        {' '}
        <Image
          src={headingNotFound}
          alt='works'
          loading='lazy'
          placeholder='blur'
        />
      </Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align='center'>
        <NextLink href='/' passHref>
          <Button
            colorScheme={useColorModeValue('purple', 'red')}
            color='white'
            bgColor={useColorModeValue('purple.400', 'red.400')}
          >
            Return to home
          </Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
