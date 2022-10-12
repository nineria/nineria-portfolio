import { Box, Link, Tooltip, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const HeadingStyle = styled.p`
  text-align: justify;
  font-weight: bold;
`;

const MemberIconStyle = styled.div`
  position: relative;
  background-color: ${(props) =>
    props.color || useColorModeValue('#fff', '#333')};
  width: 50px;
  height: 50px;
  padding: ${(props) => props.padding || '5px'};
  border-radius: 100%;
  border: 1px solid ${() => useColorModeValue('#000', '#fff')};
  cursor: pointer;
  transition: 0.35s ease-out;
  &:hover {
    opacity: 0.7;
    transform: translateY(-3px);
  }
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px;
`;

export const MemberIcon = ({
  href = 'https://nineria.vercel.app/',
  color,
  padding,
  label,
  children,
}) => (
  <Tooltip hasArrow label={label} placement='top' mt='3'>
    <Link href={href} isExternal>
      <MemberIconStyle color={color} padding={padding} label={label}>
        {children}
      </MemberIconStyle>
    </Link>
  </Tooltip>
);

export const Group = ({ title, children }) => (
  <Box mb={2}>
    <HeadingStyle>{title}</HeadingStyle>
    <Flex>{children}</Flex>
  </Box>
);
