import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Badge,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  Spacer,
} from '@chakra-ui/react'
import Image from 'next/image'

import Layout from '@components/layouts/article'
import P from '@components/paragraph'
import { Meta, Title, WorkImage } from '@components/work'
import thumbWeatherApp from '@public/images/works/weather-app.png'

const Work = () => (
  <Layout title='Weather App'>
    <Container>
      <Title createdDate='20 AUG, 2022'>
        Weather App <Badge>2021</Badge>
      </Title>
      <Image src={thumbWeatherApp} alt='hr-exvention' />

      <Heading mt={2} size='md'>
        Description
      </Heading>
      <P>Type in a location and get the weather report!</P>
      <P>Click &ldquo;Save Image&rdquo; to share the image with your friends</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href='https://react-weather-app-three-lyart.vercel.app/'
            target='_blank'
          >
            https://react-weather-app-three-lyart.vercel.app/{' '}
            <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Vite, React</span>
        </ListItem>
      </List>

      <Spacer my={100} />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
