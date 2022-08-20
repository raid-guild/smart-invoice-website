import { Box, Button, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import React from 'react';

import { CheckSquareIcon } from '../icons/CheckSquare';

export function CallToAction({ ...props }) {
  return (
    <Flex background="blue.1">
      <Flex
        justify="space-between"
        align="center"
        background="blue.1"
        padding={20}
        width="100%"
        {...props}
      >
        <Box>
          <Heading fontSize={50} fontWeight={700} textColor="white">
            Create your first invoice
          </Heading>
          <Flex gap={8} mt={4}>
            <Flex gap={4} align="center">
              <Icon as={CheckSquareIcon} color="white" checkColor="blue.1" />
              <Text textColor="white">Free to use</Text>
            </Flex>
            <Flex gap={4} align="center">
              <Icon as={CheckSquareIcon} color="white" checkColor="blue.1" />
              <Text textColor="white">No email sign up needed</Text>
            </Flex>
            <Flex gap={4} align="center">
              <Icon as={CheckSquareIcon} color="white" checkColor="blue.1" />
              <Text textColor="white">Integrated escrow</Text>
            </Flex>
            <Flex gap={4} align="center">
              <Icon as={CheckSquareIcon} color="white" checkColor="blue.1" />
              <Text textColor="white">Arbitration available</Text>
            </Flex>
          </Flex>
        </Box>
        <Button
          background="white"
          textColor="gray.dark"
          fontWeight={700}
          fontSize={18}
          paddingY={6}
          paddingX={8}
        >
          Open dApp
        </Button>
      </Flex>
    </Flex>
  );
}
