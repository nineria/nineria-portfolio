import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(10deg);
  }
`;

const Logo = () => {
  // const footPrintImg = `/images/cat${useColorModeValue('', '-dark')}.png`;

  return (
    <Link href='/' scroll={false}>
      <a>
        <LogoBox>
          {/* <Image src={footPrintImg} width={20} height={20} alt="logo" /> */}
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily='"Noto Sans Japanese", sans-serif'
            fontWeight='semibold'
            fontSize={24}
            letterSpacing={2}
          >
            Shin シン
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
