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
import headingBio from '@public/text/bio.png';
import headingHobby from '@public/text/hobby.png';
import headingSkill from '@public/text/skill.png';
import headingSocial from '@public/text/social.png';
import headingTewarit from '@public/text/tewarit.png';
import headingWork from '@public/text/work.png';
import Image from 'next/image';
import NextLink from 'next/link';
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
} from 'react-icons/io5';
import { RiVipCrownFill } from 'react-icons/ri';
import Typewriter from 'typewriter-effect';
import { BioSection, BioYear } from '../components/bio';
import thumbMyAniCommu from '../public/images/works/myanicommu_thumb.png';
import thumbAnimeSearchAlgorithm from '../public/images/works/search_algorithm.png';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

const Home = () => {
  const borderLeftColor = `section-title${useColorModeValue('', '-dark')}`;

  const SchemeColorTheme = useColorModeValue('purple', 'red');
  const colorTheme = useColorModeValue('purple.400', 'red.400');

  return (
    <Layout>
      <Container>
        <Box
          borderRadius='lg'
          mb={6}
          p={3}
          textAlign='center'
          bg='white'
          color='black'
          css={{ backdropFilter: 'blur(10px)' }}
          border='1px solid #555'
        >
          <Typewriter
            options={{
              delay: 50,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('สวัสดีครับ~')
                .pauseFor(1000)
                .deleteAll()
                .start();
              typewriter
                .typeString(
                  "Hello, I'm a front-end web developer based in Thailand!"
                )
                .pauseFor(5000)
                .start();
            }}
          />

          <Box
            pos='absolute'
            right='60px'
            bottom='-10.5px'
            w='20px'
            h='20px'
            bg='white'
            borderBottom='1px solid #555'
            borderRight='1px solid #555'
            style={{ transform: 'rotate(45deg)' }}
          />
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1} textAlign={{ base: 'center', md: 'left' }}>
            <Image
              src={headingTewarit}
              alt='Tewarit Jantarasorn'
              loading='lazy'
              placeholder='blur'
            />
            <p>Web Developer (Artist / Photographer / Guitarist )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign='center'
          >
            <Box
              borderColor={useColorModeValue('purple.500', 'white')}
              borderWidth={2}
              p='2px'
              borderStyle='solid'
              w='100px'
              h='100px'
              display='inline-block'
              borderRadius='full'
              // overflow='hidden'
              pos='relative'
            >
              <Box pos='absolute' top='-23px' right='20px' zIndex={999}>
                <RiVipCrownFill
                  color='#F6E05E'
                  size='40'
                  style={{ transform: 'rotate(10deg)' }}
                />
              </Box>
              <ProfileImage
                src='/images/tewarit.png'
                alt='Profile image'
                borderRadius='full'
                width='100%'
                height='100%'
                bgColor={useColorModeValue('purple.100', 'red.200')}
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as='h3' variant={borderLeftColor} className='css-shake'>
            <Image
              src={headingSkill}
              alt='skill'
              loading='lazy'
              placeholder='blur'
            />
          </Heading>
          <Lists href='https://reactjs.org/'>React</Lists>
          <Lists href='https://nextjs.org/'>Next.js</Lists>
          <Lists>JavaScript (ES6)</Lists>
          <Lists>HTML5 </Lists>
          <Lists>CSS3 </Lists>
          <Lists href='https://redux.js.org/'>Redux</Lists>
          <Lists href='https://graphql.org/'>GraphQL</Lists>
          <Lists href='https://graphql.org/'>Photoshop</Lists>
          <Lists href='https://graphql.org/'>Asprite</Lists>
          <Lists href='https://graphql.org/'>Blender (basic)</Lists>
          <Spacer my={8} />
          <Heading as='h3' variant={borderLeftColor}>
            <Image
              src={headingWork}
              alt='work'
              loading='lazy'
              placeholder='blur'
            />
          </Heading>
          <Paragraph>
            Tewarit is a student and a front-end web developer based in Thailand
            with a passion for building web services/stuff. He has a knack for
            all things launching products, from planning and designing all the
            way to solving real-life problems with code. When not online, he
            loves hanging out with his camera and Motorbike (Honda phantom 200)
            to travel. Currently, he is developing website call{' '}
            <NextLink href='https://myanimecommunity.vercel.app/posts' passHref>
              <Link target='_blank'>My Anime Community</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align='center' my={4}>
            <NextLink href='/works' passHref scroll={false}>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={SchemeColorTheme}
                color='white'
                bgColor={colorTheme}
              >
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as='h3' variant={borderLeftColor}>
            <Image
              src={headingBio}
              alt='bio'
              loading='lazy'
              placeholder='blur'
            />
          </Heading>
          <BioSection>
            <BioYear>2018 to present</BioYear>
            Studying the computer science&apos;s Program in Information
            Technology and Innovation of Bangkok University
            (คณะเทคโนโลยีสารสนเทศและนวัตกรรม | สาขาวิทยาการคอมพิวเตอร์ |
            มหาวิทยาลัยกรุงเทพ)
          </BioSection>
          <BioSection>
            <BioYear>2001</BioYear>
            Born in Thailand (ประเทศไทย)
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as='h3' variant={borderLeftColor}>
            <Image
              src={headingHobby}
              alt='hobby'
              loading='lazy'
              placeholder='blur'
            />
          </Heading>
          <Paragraph>
            <Link href='https://nineria.vercel.app//' target='_blank'>
              PixelArt
            </Link>
            , Music, Anime,{' '}
            <Link href='https://nineria.vercel.app//' target='_blank'>
              Drawing
            </Link>
            , Playing Guitar,{' '}
            <Link
              href='https://www.instagram.com/ninerianananai/'
              target='_blank'
            >
              Photography
            </Link>
            , Ridding motorbike,{' '}
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as='h3' variant={borderLeftColor}>
            <Image
              src={headingSocial}
              alt='social'
              loading='lazy'
              placeholder='blur'
            />
          </Heading>
          <List>
            <ListItem>
              <Link href='https://github.com/nineria' target='_blank'>
                <Button
                  variant='ghost'
                  colorScheme={SchemeColorTheme}
                  color={colorTheme}
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
                  colorScheme={SchemeColorTheme}
                  color={colorTheme}
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
                  colorScheme={SchemeColorTheme}
                  color={colorTheme}
                  leftIcon={<IoLogoInstagram />}
                >
                  @ninerianananai
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href='https://www.facebook.com/NineriaNananai'
                target='_blank'
              >
                <Button
                  variant='ghost'
                  colorScheme={SchemeColorTheme}
                  color={colorTheme}
                  leftIcon={<IoLogoFacebook />}
                >
                  @NineriaNananai
                </Button>
              </Link>
            </ListItem>
          </List>
          <Spacer my={8} />

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href='https://myanimecommunity.vercel.app/posts'
              title='My Anime Community'
              thumbnail={thumbMyAniCommu}
            >
              Anime news, Q&A, Review, and more
            </GridItem>
            <GridItem
              href='https://github.com/nineria/AnimeListApi/blob/main/AnimeRecomendation.ipynb'
              title='Anime Searching Algorithm'
              thumbnail={thumbAnimeSearchAlgorithm}
            >
              Using TfidfVectorizer / linear_kernel
            </GridItem>
          </SimpleGrid>

          <Box align='center' my={4}>
            <NextLink href='/posts' passHref scroll={false}>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={SchemeColorTheme}
                color='white'
                bgColor={colorTheme}
              >
                All posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
export { getServerSideProps } from '../components/chakra';
