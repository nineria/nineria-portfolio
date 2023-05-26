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
import thumbHrExvention from '@public/images/works/hr-exvention.png'

const Work = () => (
  <Layout title='Internship Exvention'>
    <Container>
      <Title createdDate='20 AUG, 2022'>
        HR (Human Resource Management System) <Badge>2023</Badge>
      </Title>
      <Image src={thumbHrExvention} alt='hr-exvention' />

      <Heading mt={2} size='md'>
        Description
      </Heading>
      <P>
        The website will provide assistance to Human Resources (HR) staff and
        related staff available to manage candidate information and approvals
        through the website.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://github.com/exvention/' target='_blank'>
            https://github.com/exvention/ <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Angular, ng-bootstrap, ngx-bootstrap, Material UI</span>
        </ListItem>
      </List>

      <Spacer my={100} />

      {/* <WorkImage src='/images/works/inkdrop_01.png' alt='Inkdrop' />
      <WorkImage src='/images/works/inkdrop_02.png' alt='Inkdrop' />
      <AspectRatio maxW='640px' ratio={1.7} my={4}>
        <iframe
          src='https://www.youtube.com/embed/-qBavwqc_mY'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
