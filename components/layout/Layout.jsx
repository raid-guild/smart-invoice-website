import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

import { Footer } from './Footer';
import { NavBar } from './NavBar';

export function Layout({ children }) {
  return (
    <Flex direction="column" minHeight="100vh">
      <Head>
        <title>Smart Invoice</title>
        <meta name="description" content="Smart Invoice is an easy-to-use tool that provides web3 freelancers with cryptocurrency invoicing, escrow, and arbitration." />
        <link rel="icon" href="/logos/smart-invoice/icon-blue.svg" />
        {/* <!-- Google tag (gtag.js) -->  */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-30565BWGW9"></script>
      </Head>

      <NavBar />
      <Box flexGrow={1}>{children}</Box>
      <Footer />
    </Flex>
  );
}
