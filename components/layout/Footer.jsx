import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Heading,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import React from 'react';

import logo from '../../public/logos/smart-invoice/white.svg';

export function Footer({ ...props }) {
  return (
    <Box background="blue.dark">
      <Flex
        justify="space-between"
        align="center"
        paddingX={20}
        paddingY={10}
        {...props}
      >
        <Box textColor="white">
          <Heading fontSize={32} fontWeight={700} textColor="white" mb={4}>
            Get the web3 freelancer edge
          </Heading>
          <Text maxWidth={725}>
            <span style={{ fontWeight: 700, fontStyle: 'italic' }}>
              Web3 moves fast. Things are always changing.{' '}
            </span>
            Add yourself to our notification list to get updates on new product
            features, and when something major happens in the web3 freelance
            space.
          </Text>
        </Box>
        <FormControl
          display="flex"
          alignItems="center"
          justifyContent="right"
          maxWidth={500}
        >
          <Input
            type="email"
            borderRightRadius={0}
            background="white"
            textColor="gray.dark"
            maxWidth={350}
          />
          <Button
            background="blue.1"
            textColor="white"
            fontWeight={700}
            fontSize={18}
            borderLeftRadius={0}
          >
            Add me!
          </Button>
        </FormControl>
      </Flex>
      <Divider background="#DCF2ED" />
      <Flex
        justify="space-between"
        align="center"
        paddingX={20}
        paddingY={4}
        textColor="white"
        {...props}
      >
        <NextImage src={logo} width={160} height={25.34} />
        <Flex gap={8} justify="center" align="center">
          <NextLink href="/" passHref>
            <Link>Home</Link>
          </NextLink>
          <NextLink href="#" passHref>
            <Link>Documentation</Link>
          </NextLink>
          <NextLink href="#" passHref>
            <Link>Support</Link>
          </NextLink>
          <NextLink href="#" passHref>
            <Link>Twitter</Link>
          </NextLink>
        </Flex>
      </Flex>
    </Box>
  );
}
