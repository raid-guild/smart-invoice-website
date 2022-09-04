import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import NextImage from 'next/image'
import { useEffect, useState } from "react";

import ldLogo from '../../public/logos/lexdao.svg';
import mdLogo from '../../public/logos/molochdao.svg';
import rgLogo from '../../public/logos/raidguild.svg';

export function Supporters({ ...props }) {
  const [flexDirection, setFlexDirection] = useState('row')
  const [alignment, setAlignment] = useState('flex-start')

  useEffect(() => {
    if (window) {
      changeFlexDirection()
      window.addEventListener('resize', changeFlexDirection)
    }
  })

  function changeFlexDirection() {
    if (window.innerWidth < 800) {
      setFlexDirection('column')
      setAlignment('center')
    } else {
      setFlexDirection('row')
      setAlignment('flex-start')
    }
  }

  return (
    <Box background='white' textAlign='center' padding={20}>
      <Heading mb={4}>
        Our Supporters
      </Heading>
      <Text>
        Meet the organizations helping Smart Invoice succeed.
      </Text>
      <Flex direction={flexDirection} justify='space-evenly' align={alignment} gap={20} mt={10} {...props}>
        <VStack maxWidth={320} gap={8}>
          <NextImage src={rgLogo} width={180} height={47.45} />
          <Text>
            In October 2020, several members of Raid Guild DAO began developing the initial version of Smart Invoice as an internal tool to handle invoicing and escrow for the contract work the DAO provided to clients.
          </Text>
        </VStack>
        <VStack maxWidth={320} gap={4}>
          <NextImage src={mdLogo} width={220} height={55.24} />
          <Text>
            In May 2022, the MolochDAO community passed an $82,000 grant proposal to support the continued development of Smart Invoice as a public good.
          </Text>
        </VStack>
        <VStack maxWidth={320}>
          <NextImage src={ldLogo} width={220} height={68.46} />
          <Text>
            The team at LexDAO graciously agreed to act as an unbiased third party to provide arbitration services to the users of Smart Invoice for a low fee of 5%.
          </Text>
        </VStack>
      </Flex>
    </Box>
  )
}