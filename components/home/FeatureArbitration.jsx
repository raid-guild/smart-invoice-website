import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import { CustomIcon } from '../icons/CheckSquare';

export function FeatureArbitration({ ...props }) {
  return (
    <Flex justify="center" align="center">
      <Flex
        direction="row"
        padding={20}
        justify="space-between"
        gap={10}
        width="100%"
        {...props}
      >
        <Box>
          <Text fontSize={16} fontWeight={700} textColor="blue.1">
            THIRD PARTY ARBITRATION
          </Text>
          <Heading>Dispute resolution,</Heading>
          <Heading mb={6}>without the stress.</Heading>
        </Box>

        <Grid gridTemplateColumns="repeat(2, 260px)" gap={8} rowGap={10}>
          <GridItem>
            <Icon
              as={CustomIcon}
              width={30}
              height={30}
              type='scale'
            />
            <Text mt={2}>
              Benefit from impartial decision making in case of conflict
            </Text>
          </GridItem>
          <GridItem>
            <Icon
              as={CustomIcon}
              width={30}
              height={30}
              type='piechart'
            />
            <Text mt={2}>
              Maximum arbitration service fee of 5%, automatically deducted from
              escrow
            </Text>
          </GridItem>
          <GridItem>
            <Icon
              as={CustomIcon}
              width={30}
              height={30}
              type='search'
            />
            <Text mt={2}>
              No need to find a third party arbitrator on your own
            </Text>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}
