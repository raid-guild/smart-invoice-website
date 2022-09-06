import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Script from 'next/script';
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
        <Script
          async
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-30565BWGW9`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-30565BWGW9');
            `,
          }}
        />
      </Head>

      <NavBar />
      <Box flexGrow={1}>{children}</Box>
      <Footer />
    </Flex>
  );
}
