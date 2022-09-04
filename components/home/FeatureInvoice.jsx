import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { CustomIcon } from '../icons/CheckSquare';

export function FeatureInvoice({ ...props }) {
  const [flexDirection, setFlexDirection] = useState('row')

  useEffect(() => {
    if (window) {
      toggleDirection()
      window.addEventListener('resize', toggleDirection)
    }
  })

  function toggleDirection() {
    if (window.innerWidth < 800) {
      setFlexDirection('column-reverse')
    } else {
      setFlexDirection('row')
    }
  }

  return (
    <Flex justify="center" align="center" overflowX='hidden'>
      <Flex
        direction={flexDirection}
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
            <ListItem display="flex" alignItems="center" gap={4}>
              <ListIcon
                as={CustomIcon}
                width={30}
                height={30}
                type='avoid'
              />
              <Text>
                Prevent clients sending funds to the wrong wallet address
              </Text>
            </ListItem>
            <ListItem display="flex" alignItems="center" gap={4}>
              <ListIcon
                as={CustomIcon}
                width={30}
                height={30}
                type='menu'
              />
              <Text>Stay organized with all of your invoices in one place</Text>
            </ListItem>
            <ListItem display="flex" alignItems="center" gap={4}>
              <ListIcon
                as={CustomIcon}
                width={30}
                height={30}
                type='status'
              />
              <Text>Quickly see the status of each invoice</Text>
            </ListItem>
            <ListItem display="flex" alignItems="center" gap={4}>
              <ListIcon
                as={CustomIcon}
                width={20}
                height={20}
                type='pdf'
              />
              <Text>Download PDFs of each invoice for your records</Text>
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Flex>
  );
}
