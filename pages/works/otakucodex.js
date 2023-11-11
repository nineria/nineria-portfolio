import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Heading, Link, List, ListItem, Spacer } from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '@components/layouts/article'
import P from '@components/paragraph'
import { Meta, Title, WorkImage } from '@components/work'
import OTAKUCODEXThumb from '@public/images/works/OTAKU-CODEX-home-page-thumb.png'

const Work = () => (
	<Layout title="OTAKU CODEX">
		<Container>
			<Title createdDate="20 AUG, 2022">
				OTAKU CODEX <Badge>2023</Badge>
			</Title>
			<Image src={OTAKUCODEXThumb} alt="otakucodex" />
			<Heading my={2} size="md">
				Description
			</Heading>
			<P>
				OTAKUCODEX is an online platform dedicated to providing anime enthusiasts with detailed descriptions and ranking scores for various anime series. On this website, users can
				find comprehensive information about different anime shows, including synopses, character details, genres, and production information. The platform also offers a ranking
				system that allows users to explore and compare the popularity and reception of different anime titles.
			</P>

			<List ml={4} my={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link href="https://otakucodex.shinei.app/" target="_blank">
						https://otakucodex.shinei.app/ <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Platform</Meta>
					<span>Website</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>NodeJS, SvelteKit, Tabler Icons, Tailwind CSS</span>
				</ListItem>
			</List>
			<Spacer my={100} />
			<WorkImage src="/images/works/OTAKU-CODEX-detail-page.png" alt="OTAKU-CODEX-detail-page.png" />
			<WorkImage src="/images/works/OTAKU-CODEX-search-page.png" alt="OTAKU-CODEX-search-page.png" />
			<P>
				Anime fans visiting OTAKUCODEX can expect to find a user-friendly interface that makes it easy to search for specific anime titles or discover new ones based on their
				interests. Each anime entry is likely to include a synopsis that provides an overview of the storyline, setting, and characters. Additionally, users can anticipate finding
				ranking scores assigned to each anime, helping them gauge the general consensus on the quality and appeal of the shows.
			</P>
			<br />
			<P>
				The ranking scores on OTAKUCODEX may be determined through user ratings, reviews, and possibly aggregated scores from other sources. This information can be immensely
				useful for users who are looking to watch new anime but want to ensure they choose shows that are highly regarded within the anime community.
			</P>
			<br />
			<P>
				Overall, OTAKUCODEX aims to provide a valuable resource for anime enthusiasts by offering detailed descriptions and ranking scores that aid in decision-making and enhance
				the viewing experience. However, as with any online platform, users should exercise their judgment and consider multiple sources when evaluating the quality and popularity
				of different anime series.
			</P>
			<br />
		</Container>
	</Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
