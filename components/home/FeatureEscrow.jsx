import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { CustomIcon } from '../icons/CheckSquare';

export function FeatureEscrow({ ...props }) {
  const [flexDirection, setFlexDirection] = useState('row')
  const [columns, setColumns] = useState(2)

  useEffect(() => {
    if (window) {
      toggleDirection()
      window.addEventListener('resize', toggleDirection)
    }
  })

  function toggleDirection() {
    if (window.innerWidth < 800) {
      setFlexDirection('column')
      setColumns(1)
    } else {
      setFlexDirection('row')
      setColumns(2)
    }
  }

  return (
    <Flex justify="center" overflowX='hidden'>
      <Flex
        direction={flexDirection}
        padding={20}
        justify="space-between"
        align="center"
        gap={10}
        width="100%"
        {...props}
      >
        {/* Text */}
        <Box>
          <Text fontSize={16} fontWeight={700} textColor="blue.1">
            CRYPTOCURRENCY ESCROW
          </Text>
          <Heading>Protect your money.</Heading>
          <Heading mb={6}>Protect your time.</Heading>
          <Grid gridTemplateColumns={`repeat(${columns}, 260px)`} gap={8} rowGap={10}>
            <GridItem>
              <Icon
                as={CustomIcon}
                width={30}
                height={30}
                type='client'
              />
              <Text mt={2}>
                Do business with anyone, anywhere, even if you don’t know or
                trust them yet
              </Text>
            </GridItem>
            <GridItem>
              <Icon
                as={CustomIcon}
                width={30}
                height={30}
                type='trust'
              />
              <Text mt={2}>
                Gain the peace of mind that you will get paid if you do the work
              </Text>
            </GridItem>
            <GridItem>
              <Icon
                as={CustomIcon}
                width={30}
                height={30}
                type='progress'
              />
              <Text mt={2}>
                Get paid as you complete project milestones, instead of at the
                end of your project
              </Text>
            </GridItem>
            <GridItem>
              <Icon
                as={CustomIcon}
                width={30}
                height={30}
                type='warning'
              />
              <Text mt={2}>Protect yourself from chargebacks and fraud</Text>
            </GridItem>
          </Grid>
        </Box>

        {/* Image */}
        <Box background="grey" width={536} height={451} />
      </Flex>
    </Flex>
  );
}
