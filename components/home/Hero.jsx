import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import NextImage from "next/image";
import heroImg from '../../public/assets/home/hero-image.svg'

export function HeroSection({ ...props }) {
  const [flexDirection, setFlexDirection] = useState('row')

  useEffect(() => {
    if (window) {
      toggleDirection()
      window.addEventListener('resize', toggleDirection)
    }
  })

  function toggleDirection() {
    if (window.innerWidth < 800) {
      setFlexDirection('column')
    } else {
      setFlexDirection('row')
    }
  }

  return (
    <Flex justify="center" align="center" background="gray.background" overflowX='hidden'>
      <Flex direction={flexDirection} gap={10} paddingY={20} paddingX={20} width="100%" justify='space-between' align='center' {...props}>
        <VStack align="left" gap={4}>
          <Box
            textColor="charcoal"
            fontSize={50}
            fontWeight={700}
            fontFamily="Poppins"
          >
            <Heading size="2xl">Crypto invoicing</Heading>
            <Heading size="2xl" fontStyle="italic">that&apos;s simple & free</Heading>
          </Box>
          <Heading size="md" fontWeight="normal" maxWidth={500} color="charcoal">
            Smart Invoice is an easy-to-use tool that provides web3 freelancers
            with cryptocurrency invoicing, escrow, and arbitration.
          </Heading>
          <Button background="blue.1" maxWidth={164} paddingY={6} _hover={{ background: 'blue.hover.1' }}>
            Open dApp
          </Button>
          <Text
            fontSize={12}
            fontWeight={400}
            fontStyle="italic"
            textColor="gray.light"
          >
            Free to use. No email signup required.
          </Text>
        </VStack>

        {/* Image */}
        <NextImage src={heroImg} width={600} height={453.24} objectFit="cover" />
      </Flex>
    </Flex>
  );
}
