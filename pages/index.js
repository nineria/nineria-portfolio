import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { GridItem } from '@components/grid-item';
import Layout from '@components/layouts/article';
import Lists from '@components/lists';
import Paragraph from '@components/paragraph';
import Section from '@components/section';
import Image from 'next/image';
import NextLink from 'next/link';
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';
import { BioParagraph, BioSection, BioYear } from '../components/bio';
import thumbYouTube from '../public/images/links/youtube.png';
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png';
import thumbMyAniCommu from '../public/images/works/myanicommu_thumb.png';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius='lg'
        mb={6}
        p={3}
        textAlign='center'
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an full-stack developer based in Thailand!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} textAlign={{ base: 'center', md: 'left' }}>
          <Heading as='h2' variant='page-title'>
            Tewarit Jantarasorn
          </Heading>
          <p>Web Developer (Artist / Photographer / Guitarist )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign='center'
        >
          <Box
            borderColor='#fff'
            borderWidth={2}
            p='2px'
            borderStyle='solid'
            w='100px'
            h='100px'
            display='inline-block'
            borderRadius='full'
            overflow='hidden'
          >
            <ProfileImage
              src='/images/nineria.png'
              alt='Profile image'
              borderRadius='full'
              width='100%'
              height='100%'
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title' className='css-shake'>
          Skill 🔥
        </Heading>
        <Lists href='https://reactjs.org/'>ReactJS</Lists>
        <Lists href='https://nextjs.org/'>Next.js</Lists>
        <Lists>JavaScript (ES6)</Lists>
        <Lists>HTML5 </Lists>
        <Lists>CSS3 </Lists>
        <Lists href='https://redux.js.org/'>Redux </Lists>
        <Lists href='https://graphql.org/'>GraphQL</Lists>
        <Spacer my={8} />
        <Heading as='h3' variant='section-title'>
          Work 💪🏻
        </Heading>
        <Paragraph>
          Tewarit is a student and a front-end web developer based in Thailand
          with a passion for building web services/stuff. He has a knack for all
          things launching products, from planning and designing all the way to
          solving real-life problems with code. When not online, he loves
          hanging out with his camera and Motorbike (Honda phantom 200) to
          travel. Currently, he is developing website call{' '}
          <NextLink href='https://myanimecommunity.vercel.app/posts' passHref>
            <Link target='_blank'>My Anime Community</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align='center' my={4}>
          <NextLink href='/works' passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='blue'>
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Bio ✈️
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Thailand (ประเทศไทย)
        </BioSection>
        <BioSection>
          <BioYear>2018 to present</BioYear>
          Studying the computer science&apos;s Program in Information Technology
          and Innovation of Bangkok University
          <BioParagraph>คณะเทคโนโลยีสารสนเทศและนวัตกรรม</BioParagraph>
          <BioParagraph>สาขาวิทยาการคอมพิวเตอร์</BioParagraph>
          <BioParagraph>มหาวิทยาลัยกรุงเทพ | BU</BioParagraph>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>
          Hobby 🦄
        </Heading>
        <Paragraph>
          Art, Music, Anime,{' '}
          <Link href='https://illust.odoruinu.net/' target='_blank'>
            Drawing
          </Link>
          , Playing Guitar,{' '}
          <Link
            href='https://www.instagram.com/ninerianananai/'
            target='_blank'
          >
            Photography
          </Link>
          , Ridding motorbike
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>
          Social media 🌏
        </Heading>
        <List>
          <ListItem>
            <Link href='https://github.com/nineria' target='_blank'>
              <Button
                variant='ghost'
                colorScheme={useColorModeValue('purple', 'yellow')}
                leftIcon={<IoLogoGithub />}
              >
                @nineria
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='https://twitter.com/nineria_nananai' target='_blank'>
              <Button
                variant='ghost'
                colorScheme={useColorModeValue('purple', 'yellow')}
                leftIcon={<IoLogoTwitter />}
              >
                @nineria_nananai
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='https://instagram.com/ninerianananai' target='_blank'>
              <Button
                variant='ghost'
                colorScheme={useColorModeValue('purple', 'yellow')}
                leftIcon={<IoLogoInstagram />}
              >
                @ninerianananai
              </Button>
            </Link>
          </ListItem>
        </List>
        <Spacer my={8} />

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href='https://www.youtube.com/devaslife'
            title='Dev as Life'
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href='https://myanimecommunity.vercel.app/posts'
            title='MyAniCommu'
            thumbnail={thumbMyAniCommu}
          >
            Anime community website
          </GridItem>
        </SimpleGrid>

        <Box align='center' my={4}>
          <NextLink href='/posts' passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='blue'>
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from '../components/chakra';
