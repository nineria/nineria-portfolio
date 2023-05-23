import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { BioSection, BioYear } from '@components/bio'
import { GridItem } from '@components/grid-item'
import {
  headingBio,
  headingHobby,
  headingSkill,
  headingSocial,
  headingTewarit,
  headingWork,
} from '@components/headers'
import KoFi from '@components/ko-fi'
import Layout from '@components/layouts/article'
import { Group, MemberIcon } from '@components/lists'
import Paragraph from '@components/paragraph'
import Section from '@components/section'
import {
  angular,
  aseprite,
  canva,
  css3,
  figma,
  firebase,
  framer,
  graphql,
  html5,
  js,
  mongodb,
  nextDotJs,
  nodeJs,
  photoshop,
  pocketbase,
  react,
  redis,
  redux,
  ts,
  vue,
} from '@components/skills'
import thumbMyAniCommu from '@public/images/works/myanicommu_thumb.png'
import thumbAnimeSearchAlgorithm from '@public/images/works/search_algorithm.png'
import Image from 'next/image'
import NextLink from 'next/link'
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
} from 'react-icons/io5'
import { RiVipCrownFill } from 'react-icons/ri'
import Typewriter from 'typewriter-effect'

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
})

const Home = () => {
  const borderLeftColor = `section-title${useColorModeValue('', '-dark')}`

  const SchemeColorTheme = useColorModeValue('purple', 'red')
  const colorTheme = useColorModeValue('purple.400', 'red.400')

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
                .typeString('Hello, ~')
                .pauseFor(1000)
                .deleteAll()
                .start()
              typewriter
                .typeString("I'm a Full-Stack web developer based in Thailand!")
                .pauseFor(5000)
                .start()
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
              style={{ pointerEvents: 'none' }}
            />
            <Flex flexDir={{ base: 'column', md: 'row' }}>
              <Text w='full'>Web Developer</Text>
              <Text w='full' whiteSpace='nowrap'>
                (Artist / Photographer / Designer )
              </Text>
            </Flex>
          </Box>
          <Box
            flexShrink={0}
            my={{ base: 10, md: 0 }}
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
                bgColor={useColorModeValue('purple.100', 'red.300')}
                pointerEvents='none'
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as='h3' variant={borderLeftColor}>
            <Image
              src={headingWork}
              alt='work'
              loading='lazy'
              placeholder='blur'
              style={{ pointerEvents: 'none' }}
            />
          </Heading>
          <Paragraph>
            I&apos;m a Full-Stack web developer with a passion for building web
            services etc. I&apos;m excited to learn new programming features and
            frameworks, from planning, designing, and developing to launching
            products and solving real-life problems with code. When not online,
            I like to hang out with my camera and travel to several places, I
            also love to ride motorcycles and draw. Currently, I&apos;m
            developing a website called{' '}
            <NextLink href='https://myanimecommunity.vercel.app' passHref>
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
              style={{ pointerEvents: 'none' }}
            />
          </Heading>
          <BioSection>
            <BioYear>2023 to present</BioYear>
            Internship at Solution Mania Co.,Ltd.
          </BioSection>
          <BioSection>
            <BioYear>2019 to present</BioYear>
            Studying the Computer Science&apos;s Program in Information
            Technology and Innovation of Bangkok University
            (สาขาวิทยาการคอมพิวเตอร์ | คณะเทคโนโลยีสารสนเทศและนวัตกรรม |
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
              style={{ pointerEvents: 'none' }}
            />
          </Heading>
          <Paragraph>
            <Link href='https://nineria.vercel.app' target='_blank'>
              PixelArt
            </Link>
            , Music, Anime,{' '}
            <Link href='https://nineria.vercel.app' target='_blank'>
              Drawing
            </Link>
            , Playing Guitar,{' '}
            <Link
              href='https://www.instagram.com/ninerianananai'
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
              src={headingSkill}
              alt='skill'
              loading='lazy'
              placeholder='blur'
              style={{ pointerEvents: 'none' }}
            />
          </Heading>
          <Group title='Scripts & Frameworks'>
            <MemberIcon
              label='HyperText Markup Language (HTML) 5'
              href='https://www.w3schools.com/html/default.asp'
            >
              <Image
                src={html5}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>

            <MemberIcon
              label='Cascading Style Sheets (CSS) 3'
              href='https://www.w3schools.com/css/default.asp'
            >
              <Image
                src={css3}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
            <MemberIcon
              label='JavaScript'
              padding='8px'
              href='https://www.w3schools.com/js/default.asp'
            >
              <Image
                src={js}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
            <MemberIcon
              label='TypeScript'
              padding='8px'
              href='https://www.w3schools.com/typescript/index.php'
            >
              <Image
                src={ts}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
            <MemberIcon label='Next.js' color='#fff' href='https://nextjs.org/'>
              <Image
                src={nextDotJs}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
            <MemberIcon
              label='React'
              href='https://www.w3schools.com/react/default.asp'
            >
              <Image
                src={react}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
            <MemberIcon
              label='Redux'
              padding='8px'
              href='https://redux.js.org/'
            >
              <Image
                src={redux}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
            <MemberIcon label='GraphQL' href='https://graphql.org/'>
              <Image
                src={graphql}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
            <MemberIcon
              label='NodeJS'
              href='https://www.w3schools.com/nodejs/default.asp'
            >
              <Image
                src={nodeJs}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
            <MemberIcon
              label='Framer Motion'
              href='https://www.framer.com/motion/'
              color='#fff'
            >
              <Image
                src={framer}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
            <MemberIcon label='Angular' href='https://angular.io/'>
              <Image
                src={angular}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
            <MemberIcon label='Vue' href='https://vuejs.org/'>
              <Image
                src={vue}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
          </Group>

          <Group title='UX/UI'>
            <MemberIcon
              label='Adobe Photoshop'
              padding='6px'
              href='https://www.adobe.com/products/photoshop.html'
            >
              <Image
                src={photoshop}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
            <MemberIcon
              label='Aseprite'
              color='#fff'
              href='https://www.aseprite.org/'
            >
              <Image
                src={aseprite}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
            <MemberIcon
              label='Canva'
              color='#fff'
              href='https://www.canva.com/'
            >
              <Image
                src={canva}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
            <MemberIcon label='Figma' href='https://www.figma.com/'>
              <Image
                src={figma}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
          </Group>

          <Group title='Database'>
            <MemberIcon label='Firebase' href='https://firebase.google.com/'>
              <Image
                src={firebase}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
            <MemberIcon label='MongoDB' href='https://www.mongodb.com/'>
              <Image
                src={mongodb}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
            <MemberIcon label='Redis' href='https://redis.io/'>
              <Image
                src={redis}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
            <MemberIcon label='PocketBase' href='https://pocketbase.io/'>
              <Image
                src={pocketbase}
                alt='skill'
                loading='lazy'
                width={40}
                height={40}
              />
            </MemberIcon>
          </Group>
        </Section>

        <Section delay={0.3}>
          <Heading as='h3' variant={borderLeftColor}>
            <Image
              src={headingSocial}
              alt='social'
              loading='lazy'
              placeholder='blur'
              style={{ pointerEvents: 'none' }}
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

          <KoFi />

          <Spacer my={8} />

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href='https://myanimecommunity.vercel.app'
              title='My Anime Community'
              thumbnail={thumbMyAniCommu}
            >
              Anime News, Q&A, Review, and more
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
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
