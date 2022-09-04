import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';

export function DemoSection({ ...props }) {
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
    <Flex justify="center" align="center" overflowX='hidden'>
      <Box padding={20} width="100%" {...props}>
        <Flex direction={flexDirection} justify="space-between" align={flexDirection === 'column' ? 'center' : 'end'} gap={6}>
          <Box maxWidth={700}>
            <Heading mb={2}>Designed for all freelancers</Heading>
            <Text>
              Smart Invoice was created to be a simple and secure tool that
              freelancers in all fields could easily use, regardless of project
              size. You don’t have to be a developer or “technical.”
            </Text>
          </Box>
          <NextLink href="https://app.smartinvoice.xzy">
            <Button background="blue.1">Open dApp</Button>
          </NextLink>
        </Flex>
        <Divider background="blue.1" mt={8} mb={8} />
        <Flex direction={flexDirection === 'column' ? 'column-reverse' : 'row'} justify="space-between" align={flexDirection === 'column' && 'center'} gap={10}>
          <Accordion width={flexDirection === 'column' ? '100%' : 380} textColor="white" defaultIndex={0}>
            <AccordionItem mb={2}>
              <AccordionButton
                fontWeight={700}
                fontSize={18}
                paddingX={8}
                paddingY={4}
                textColor="gray.dark"
                borderRadius={10}
                _expanded={{
                  background: 'blue.dark',
                  color: 'white',
                  borderBottomRadius: 0,
                }}
              >
                Connect your wallet
              </AccordionButton>
              <AccordionPanel
                paddingX={8}
                paddingTop={0}
                background="blue.dark"
                borderBottomRadius={10}
              >
                No email signup needed. Just connect your crypto wallet and
                Smart Invoice is ready to use.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mb={2}>
              <AccordionButton
                fontWeight={700}
                fontSize={18}
                paddingX={8}
                paddingY={4}
                textColor="gray.dark"
                borderRadius={10}
                _expanded={{
                  background: 'blue.dark',
                  color: 'white',
                  borderBottomRadius: 0,
                }}
              >
                Create your invoice
              </AccordionButton>
              <AccordionPanel
                paddingX={8}
                paddingTop={0}
                background="blue.dark"
                borderBottomRadius={10}
              >
                Follow the prompts to quickly create a new invoice with one or more project milestones.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mb={2}>
              <AccordionButton
                fontWeight={700}
                fontSize={18}
                paddingX={8}
                paddingY={4}
                textColor="gray.dark"
                borderRadius={10}
                _expanded={{
                  background: 'blue.dark',
                  color: 'white',
                  borderBottomRadius: 0,
                }}
              >
                Client deposits funds
              </AccordionButton>
              <AccordionPanel
                paddingX={8}
                paddingTop={0}
                background="blue.dark"
                borderBottomRadius={10}
              >
                Share the invoice with your client so they can fund one or more milestones.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mb={2}>
              <AccordionButton
                fontWeight={700}
                fontSize={18}
                paddingX={8}
                paddingY={4}
                textColor="gray.dark"
                borderRadius={10}
                _expanded={{
                  background: 'blue.dark',
                  color: 'white',
                  borderBottomRadius: 0,
                }}
              >
                Funds held in smart contracts
              </AccordionButton>
              <AccordionPanel
                paddingX={8}
                paddingTop={0}
                background="blue.dark"
                borderBottomRadius={10}
              >
                Once your client has sent payment, those funds are held in the smart contract linked to your invoice. 
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mb={2}>
              <AccordionButton
                fontWeight={700}
                fontSize={18}
                paddingX={8}
                paddingY={4}
                textColor="gray.dark"
                borderRadius={10}
                _expanded={{
                  background: 'blue.dark',
                  color: 'white',
                  borderBottomRadius: 0,
                }}
              >
                Client releases funds
              </AccordionButton>
              <AccordionPanel
                paddingX={8}
                paddingTop={0}
                background="blue.dark"
                borderBottomRadius={10}
              >
                When you complete a milestone, ask your client to release that milestone’s funds to you. Also ask your client to fund the next milestone so you can continue work.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mb={2}>
              <AccordionButton
                fontWeight={700}
                fontSize={18}
                paddingX={8}
                paddingY={4}
                textColor="gray.dark"
                borderRadius={10}
                _expanded={{
                  background: 'blue.dark',
                  color: 'white',
                  borderBottomRadius: 0,
                }}
              >
                Receive funds
              </AccordionButton>
              <AccordionPanel
                paddingX={8}
                paddingTop={0}
                background="blue.dark"
                borderBottomRadius={10}
              >
                Within a few minutes, released funds will be automatically sent to your wallet address.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                fontWeight={700}
                fontSize={18}
                paddingX={8}
                paddingY={4}
                textColor="gray.dark"
                borderRadius={10}
                _expanded={{
                  background: 'blue.dark',
                  color: 'white',
                  borderBottomRadius: 0,
                }}
              >
                Request arbitration (optional)
              </AccordionButton>
              <AccordionPanel
                paddingX={8}
                paddingTop={0}
                background="blue.dark"
                borderBottomRadius={10}
              >
                In the event of a dispute, you or your client can lock funds in Smart Invoice and a submission will automatically be made to a 3rd party arbitrator to help resolve the dispute.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          {/* Image */}
          <Box height={600} width={600} background="gray.dark" />
        </Flex>
      </Box>
    </Flex>
  );
}
