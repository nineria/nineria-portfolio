import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Flex, Heading, Link, List, ListItem, SimpleGrid, Spacer, Text, chakra, useColorModeValue } from '@chakra-ui/react'
import { BioSection, BioYear } from '@components/bio'
import { GridItem } from '@components/grid-item'
import { headingBio, headingHobby, headingSkill, headingSocial, headingTewarit, headingWork } from '@components/headers'
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
	docker,
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
	prisma,
	react,
	redis,
	redux,
	svelte,
	ts,
	vue
} from '@components/skills'
import thumbOtakuCodex from '@public/images/works/OTAKU-CODEX-home-page-thumb.png'
import thumbMyAniCommu from '@public/images/works/myanicommu_thumb.png'

import thumbEdSheeranPerfect from '@public/images/posts/ed-sheeran-perfect-viper-ai-cover.png'
import thumbJustTheTwoOfUs from '@public/images/posts/just-the-two-of-us-rem-ai-cover-aggressive-version.png'
import thumbYakuzaOstBakaMitai from '@public/images/posts/yakuza-ost-baka-mitai-rem-ai-cover.png'

import Image from 'next/image'
import NextLink from 'next/link'
import { IoLogoGithub, IoLogoTiktok, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5'
import { RiVipCrownFill } from 'react-icons/ri'
import Typewriter from 'typewriter-effect'

const ProfileImage = chakra(Image, {
	shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
	const borderLeftColor = `section-title${useColorModeValue('', '-dark')}`

	const SchemeColorTheme = useColorModeValue('red', 'red')
	const colorTheme = useColorModeValue('red.400', 'red.400')

	return (
		<Layout>
			<Container>
				<Box borderRadius="lg" mb={6} p={3} textAlign="center" bg="white" color="black" backdropFilter="blur(10px)" border="1px solid #555">
					<Typewriter
						options={{
							delay: 50,
							loop: true
						}}
						onInit={(typewriter) => {
							typewriter.typeString('Hello, ~').pauseFor(1000).deleteAll().start()
							typewriter.typeString("I'm a Full-Stack web developer based in Thailand!").pauseFor(5000).start()
						}}
					/>

					<Box
						pos="absolute"
						right="30px"
						bottom="-5.8px"
						w="10px"
						h="10px"
						bg="white"
						borderBottom="1px solid #555"
						borderRight="1px solid #555"
						style={{ transform: 'rotate(45deg)' }}
					/>
				</Box>

				<Box display={{ md: 'flex' }}>
					<Box flexGrow={1} textAlign={{ base: 'center', md: 'left' }}>
						<Image src={headingTewarit} alt="Tewarit Jantarasorn" loading="lazy" placeholder="blur" style={{ pointerEvents: 'none' }} />
						<Flex flexDir={{ base: 'column', md: 'row' }}>
							<Text w="full">Web Developer</Text>
							<Text w="full" whiteSpace="nowrap">
								(Artist / Photographer / Designer )
							</Text>
						</Flex>
					</Box>
					<Box flexShrink={0} my={{ base: 10, md: 0 }} ml={{ md: 6 }} textAlign="center">
						<Box
							borderColor={useColorModeValue('red.200', 'red.100')}
							borderWidth={2}
							p="2px"
							borderStyle="solid"
							w="100px"
							h="100px"
							display="inline-block"
							borderRadius="full"
							pos="relative"
						>
							<Box pos="absolute" top="-23px" right="20px" zIndex={999}>
								<RiVipCrownFill color="#F6E05E" size="40" style={{ transform: 'rotate(10deg)' }} />
							</Box>
							<ProfileImage
								src="/images/tewarit.png"
								alt="Profile image"
								borderRadius="full"
								width="100%"
								height="100%"
								bgColor={useColorModeValue('red.300', 'red.300')}
								pointerEvents="none"
							/>
						</Box>
					</Box>
				</Box>

				<Section delay={0.1}>
					<Heading as="h3" variant={borderLeftColor}>
						<Image src={headingWork} alt="work" loading="lazy" placeholder="blur" style={{ pointerEvents: 'none' }} />
					</Heading>
					<Paragraph>
						I&#39;m a Full-Stack web developer who enjoys crafting web services. I&#39;m excited to learn new programming features and frameworks from brainstorming ideas to
						launching complete products and solving real-world issues with clever coding. When I&#39;m offline, I relish capturing moments through my camera while traveling and
						experiencing the motorcycle rides. Drawing is also a hobby of mine. Currently, I&#39;m developing websites called &#34;
						<NextLink href="https://myanimecommunity.shinei.app" passHref>
							<Link target="_blank">MyAnimeCommunity</Link>
						</NextLink>
						&#34; and &#34;
						<NextLink href="https://otakucodex.shinei.app" passHref>
							<Link target="_blank">OTAKUCODEX</Link>
						</NextLink>
						&#34;, which aims to unite people through a shared passion for anime. .
					</Paragraph>
					<Box align="center" my={4}>
						<NextLink href="/works" passHref scroll={false}>
							<Button rightIcon={<ChevronRightIcon />} colorScheme={SchemeColorTheme} color="white" bgColor={colorTheme}>
								My portfolio
							</Button>
						</NextLink>
					</Box>
				</Section>

				<Section delay={0.2}>
					<Heading as="h3" variant={borderLeftColor}>
						<Image src={headingBio} alt="bio" loading="lazy" placeholder="blur" style={{ pointerEvents: 'none' }} />
					</Heading>
					<BioSection>
						<BioYear>2023</BioYear>
						Working at Uniclass Co, Ltd.
					</BioSection>
					<BioSection>
						<BioYear>2023</BioYear>
						Internship at Exvention Co, Ltd.
					</BioSection>
					<BioSection>
						<BioYear>2019 - 2023</BioYear>
						Graduated the Computer Science from School of Information Technology and Innovation of Bangkok University (สาขาวิทยาการคอมพิวเตอร์ | คณะเทคโนโลยีสารสนเทศและนวัตกรรม |
						มหาวิทยาลัยกรุงเทพ)
					</BioSection>
				</Section>

				<Section delay={0.3}>
					<Heading as="h3" variant={borderLeftColor}>
						<Image src={headingHobby} alt="hobby" loading="lazy" placeholder="blur" style={{ pointerEvents: 'none' }} />
					</Heading>
					<Paragraph>PixelArt , Music, Anime, Drawing, Playing Guitar, Photography , Ridding motorbike,</Paragraph>
				</Section>

				<Section delay={0.3}>
					<Heading as="h3" variant={borderLeftColor}>
						<Image src={headingSkill} alt="skill" loading="lazy" placeholder="blur" style={{ pointerEvents: 'none' }} />
					</Heading>
					<Group title="Scripts & Frameworks">
						<MemberIcon label="HyperText Markup Language (HTML) 5" href="https://www.w3schools.com/html/default.asp">
							<Image src={html5} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>

						<MemberIcon label="Cascading Style Sheets (CSS) 3" href="https://www.w3schools.com/css/default.asp">
							<Image src={css3} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
						<MemberIcon label="JavaScript" padding="8px" href="https://www.w3schools.com/js/default.asp">
							<Image src={js} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
						<MemberIcon label="TypeScript" padding="8px" href="https://www.w3schools.com/typescript/index.php">
							<Image src={ts} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
						<MemberIcon label="Next.js" href="https://nextjs.org/">
							<Image src={nextDotJs} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
						<MemberIcon label="React" href="https://www.w3schools.com/react/default.asp">
							<Image src={react} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
						<MemberIcon label="Redux" padding="8px" href="https://redux.js.org/">
							<Image src={redux} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
						<MemberIcon label="GraphQL" href="https://graphql.org/">
							<Image src={graphql} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
						<MemberIcon label="NodeJS" href="https://www.w3schools.com/nodejs/default.asp">
							<Image src={nodeJs} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
						<MemberIcon label="Framer Motion" href="https://www.framer.com/motion/">
							<Image src={framer} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
						<MemberIcon label="Angular" href="https://angular.io/">
							<Image src={angular} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
						<MemberIcon label="Vue" href="https://vuejs.org/">
							<Image src={vue} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>

						<MemberIcon label="Svelte Kit" href="https://kit.svelte.dev/">
							<Image src={svelte} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
					</Group>

					<Group title="UX/UI">
						<MemberIcon label="Adobe Photoshop" padding="6px" href="https://www.adobe.com/products/photoshop.html">
							<Image src={photoshop} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
						<MemberIcon label="Aseprite" href="https://www.aseprite.org/">
							<Image src={aseprite} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
						<MemberIcon label="Canva" href="https://www.canva.com/">
							<Image src={canva} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
						<MemberIcon label="Figma" href="https://www.figma.com/">
							<Image src={figma} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
					</Group>

					<Group title="Database">
						<MemberIcon label="Docker" href="https://www.docker.com/">
							<Image src={docker} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
						<MemberIcon label="Firebase" href="https://firebase.google.com/">
							<Image src={firebase} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
						<MemberIcon label="MongoDB" href="https://www.mongodb.com/">
							<Image src={mongodb} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
						<MemberIcon label="Redis" href="https://redis.io/">
							<Image src={redis} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
						<MemberIcon label="Prisma" href="https://www.prisma.io/">
							<Image src={prisma} alt="skill" loading="lazy" width={40} height={40} />
						</MemberIcon>
					</Group>
				</Section>

				<Section delay={0.3}>
					<Heading as="h3" variant={borderLeftColor}>
						<Image src={headingSocial} alt="social" loading="lazy" placeholder="blur" style={{ pointerEvents: 'none' }} />
					</Heading>
					<List>
						<ListItem>
							<Link href="https://github.com/nineria" target="_blank">
								<Button variant="ghost" colorScheme={SchemeColorTheme} color={colorTheme} leftIcon={<IoLogoGithub />}>
									@nineria
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="https://twitter.com/nineria_nananai" target="_blank">
								<Button variant="ghost" colorScheme={SchemeColorTheme} color={colorTheme} leftIcon={<IoLogoTwitter />}>
									@nineria_nananai
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="https://www.youtube.com/channel/UCcQ_cOUHcydKmrrWz87qvBw" target="_blank">
								<Button variant="ghost" colorScheme={SchemeColorTheme} color={colorTheme} leftIcon={<IoLogoYoutube />}>
									@mirai9985
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="https://www.tiktok.com/@mirai9985" target="_blank">
								<Button variant="ghost" colorScheme={SchemeColorTheme} color={colorTheme} leftIcon={<IoLogoTiktok />}>
									@mirai9985
								</Button>
							</Link>
						</ListItem>
						{/* <ListItem>
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
            </ListItem> */}
						{/* <ListItem>
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
            </ListItem> */}
					</List>

					<Spacer my={8} />

					<SimpleGrid columns={[1, 2, 2]} gap={6}>
						<GridItem href="https://otakucodex.shinei.app/" title="OTAKU CODEX" thumbnail={thumbOtakuCodex}>
							Unlocking the Anime Realm: Exploring the Enchanting Universe
						</GridItem>
						<GridItem href="https://myanimecommunity.shinei.app" title="My Anime Community" thumbnail={thumbMyAniCommu}>
							Anime News, Q&A, Review, and more
						</GridItem>
					</SimpleGrid>

					<Spacer my={8} />

					<SimpleGrid columns={[1, 3, 3]} gap={6}>
						<GridItem title="Yakuza OST - Baka Mitai (Rem AI Cover)" thumbnail={thumbYakuzaOstBakaMitai} href="https://www.youtube.com/watch?v=W2MWNEuO7Pc" />
						<GridItem title="Ed Sheeran - Perfect (Viper AI Cover)" thumbnail={thumbEdSheeranPerfect} href="https://www.youtube.com/watch?v=DQssoObT7KY" />
						<GridItem title="Just The Two Of Us - Rem AI Cover Aggressive Version" thumbnail={thumbJustTheTwoOfUs} href="https://www.youtube.com/watch?v=peRT0xzURlY" />
					</SimpleGrid>

					<Spacer my={10} />

					<Box align="center" my={4}>
						<KoFi />
					</Box>
				</Section>
			</Container>
		</Layout>
	)
}

export default Home
export { getServerSideProps } from '../components/chakra'
