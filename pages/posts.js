import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import Layout from "../components/layouts/article";
import headingPopularPosts from "../public/text/popular-posts.png";

const Posts = () => (
  <Layout title="Tewarit Jantarasorn - Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        <Image
          src={headingPopularPosts}
          alt="works"
          loading="lazy"
          placeholder="blur"
        />
      </Heading>

      <Text>Nothing right now ;)</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button
            colorScheme={useColorModeValue("purple", "red")}
            color="white"
            bgColor={useColorModeValue("purple.400", "red.400")}
          >
            Return to home
          </Button>
        </NextLink>
      </Box>

      {/* <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to build a portfolio website"
            thumbnail={thumbPortfolio}
            href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
          />
          <GridItem
            title="How to take notes in Markdown efficiently with Inkdrop"
            thumbnail={thumbHowToUseInkdrop}
            href="https://www.youtube.com/watch?v=-qBavwqc_mY"
          />
          <GridItem
            title="My Fish workflow"
            thumbnail={thumbFishWorkflow}
            href="https://www.youtube.com/watch?v=KKxhf50FIPI"
          />
          <GridItem
            title="My desk setup (Late 2020)"
            thumbnail={thumbMyDeskSetup}
            href="https://www.youtube.com/watch?v=1OFDMwDlnOE"
          />
        </SimpleGrid>
      </Section> */}
      {/* 
      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title='How I’ve Attracted The First 500 Paid Users For My SaaS That Costs $5/mo'
            thumbnail={thumb500PaidUsers}
            href='https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820'
          />
          <GridItem
            title='I stopped setting a financial goal for my SaaS'
            thumbnail={thumbFinancialGoal}
            href='https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506'
          />
        </SimpleGrid>
      </Section> */}

      {/* <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title='How to Price Yourself as a Freelance Developer'
            thumbnail={thumbHowToPriceYourself}
            href='https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91'
          />
          <GridItem
            title='I made my React Native app 50x faster'
            thumbnail={thumb50xFaster}
            href='https://www.youtube.com/watch?v=vj723NlrIQc'
          />
        </SimpleGrid>
      </Section> */}
    </Container>
  </Layout>
);

export default Posts;
export { getServerSideProps } from "../components/chakra";
