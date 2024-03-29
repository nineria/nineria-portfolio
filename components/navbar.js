import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { IoLogoGithub } from 'react-icons/io5';
import Logo from './logo';
import ThemeToggleButton from './theme-toggle-button';

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');

  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'teal.400' : undefined}
        color={active ? 'white' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      css={{
        backdropFilter: 'blur(15px)',
        backgroundColor: useColorModeValue(
          'rgba(247, 236, 222, .5)',
          'rgba(30, 30, 37. .5)'
        ),
      }}
      zIndex={2}
      {...props}
    >
      <Container
        maxW='container.sm'
        display='flex'
        p={2}
        wrap='wrap'
        justify='space-between'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href='/works' path={path}>
            Works
          </LinkItem>
          <LinkItem href='/posts' path={path}>
            Posts
          </LinkItem>
          <LinkItem
            target='_blank'
            href='https://github.com/nineria'
            path={path}
            display='inline-flex'
            alignItems='center'
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            GitHub
          </LinkItem>
        </Stack>

        <Box flex={1} align='right'>
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id='navbar-menu'>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label='Options'
              />
              <MenuList>
                <NextLink href='/' passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href='/works' passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href='/posts' passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <MenuItem as={Link} href='https://github.com/nineria'>
                  GitHub
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
