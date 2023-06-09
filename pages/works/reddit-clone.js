import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import Image from "next/image";

import Layout from "@components/layouts/article";
import P from "@components/paragraph";
import { Meta, Title, WorkImage } from "@components/work";
import thumbRedditCloneJoin from "@public/images/works/reddit-clone-join.png";

const Work = () => (
  <Layout title="Reddit Clone">
    <Container>
      <Title createdDate="20 AUG, 2022">
        Reddit clone with Next.js <Badge>2022</Badge>
      </Title>
      <Image src={thumbRedditCloneJoin} alt="hr-exvention" />

      <Heading mt={2} size="md">
        Description
      </Heading>
      <P>
        Build a Reddit clone from scratch using React, Firebase, Next.js, Chakra
        UI, and TypeScript
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://github.com/nineria/next-reddit-clone"
            target="_blank"
          >
            https://github.com/nineria/next-reddit-clone{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, React, Next.js, Chakra UI, Firebase</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/reddit-clone-read.png" alt="Inkdrop" />
      <WorkImage src="/images/works/reddit-clone-create.png" alt="Inkdrop" />
      <WorkImage src="/images/works/reddit-clone-comment.png" alt="Inkdrop" />

      <Spacer my={100} />
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
