import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import React from 'react';

import flexibleIcon from '../../public/flexible-icon.svg';
import impartialIcon from '../../public/impartial-icon.svg';
import secureIcon from '../../public/secure-icon.svg';

export function FeatureCrypto({ ...props }) {
  return (
    <Flex justify="center" align="center">
      <Box padding={20} width="100%" {...props}>
        <Heading mb={2}>Accept cryptocurrency payments for your work</Heading>
        <Text mb={10}>
          Choose from 30+ tokens to get paid with, including ETH, USDC, xDAI,
          and more!
        </Text>
        <Grid
          gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          justifyContent="space-between"
          alignItems="center"
        >
          <GridItem maxWidth={310}>
            {/* Icon */}
            <NextImage
              src={flexibleIcon}
              width={56}
              height={56}
              objectFit="cover"
            />
            <Text fontWeight={700} fontSize={18} mt={6} mb={2}>
              Flexible
            </Text>
            <Text>
              Decide which cryptocurrency to be paid with and in how many
              payments.
            </Text>
          </GridItem>
          <GridItem maxWidth={310}>
            {/* Icon */}
            <NextImage
              src={secureIcon}
              width={56}
              height={56}
              objectFit="cover"
            />
            <Text fontWeight={700} fontSize={18} mt={6} mb={2}>
              Secure
            </Text>
            <Text>
              Escrow funds are secured via a smart contract until released to
              your wallet.
            </Text>
          </GridItem>
          <GridItem maxWidth={310}>
            {/* Icon */}
            <NextImage
              src={impartialIcon}
              width={56}
              height={56}
              objectFit="cover"
            />
            <Text fontWeight={700} fontSize={18} mt={6} mb={2}>
              Impartial
            </Text>
            <Text>
              Integrated dispute resolution through a third party arbitrator, if
              you need it.
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
}
