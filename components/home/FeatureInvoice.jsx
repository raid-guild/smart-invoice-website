import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import { CheckSquareIcon } from '../icons/CheckSquare';

export function FeatureInvoice({ ...props }) {
  return (
    <Flex justify="center" align="center">
      <Flex
        direction="row"
        padding={20}
        justify="space-between"
        align="center"
        gap={20}
        width="100%"
        {...props}
      >
        {/* Image */}
        <Box background="grey" width={536} height={451} />

        {/* Text */}
        <Box>
          <Text fontSize={16} fontWeight={700} textColor="blue.1">
            CRYPTOCURRENCY INVOICING
          </Text>
          <Heading mb={6}>
            The smart way to get paid as a web3 freelancer.
          </Heading>
          <List spacing={6}>
            <ListItem display="flex" alignItems="center">
              <ListIcon
                as={CheckSquareIcon}
                color="blue.1"
                checkColor="white"
                width={30}
                height={30}
              />
              <Text>
                Prevent clients sending funds to the wrong wallet address
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon
                as={CheckSquareIcon}
                color="blue.1"
                checkColor="white"
                width={30}
                height={30}
              />
              <Text>Stay organized with all of your invoices in one place</Text>
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon
                as={CheckSquareIcon}
                color="blue.1"
                checkColor="white"
                width={30}
                height={30}
              />
              <Text>Quickly see the status of each invoice</Text>
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon
                as={CheckSquareIcon}
                color="blue.1"
                checkColor="white"
                width={30}
                height={30}
              />
              <Text>Download PDFs of each invoice for your records</Text>
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Flex>
  );
}
