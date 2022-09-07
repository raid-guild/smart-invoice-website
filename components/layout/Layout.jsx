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
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Smart Invoice | Crypto Invoicing & Escrow Software</title>
        <meta name="description" content="Free cryptocurrency invoicing and escrow software for freelancers. Securely accept payments in ETH, WETH, USDC, USDT, DAI, XDAI, WBTC, and many more tokens!"/>
        <meta name="keywords" content="online invoicing software, cryptocurrency invoicing, free invoicing, invoices, escrow, crypto escrow, crypto payments"/>
        <meta name="author" content="Smart Invoice"/>
        <meta property="og:title" content="Crypto Invoicing & Escrow | Smart Invoice"/>
        <meta property="og:description" content="Free cryptocurrency invoicing and escrow software for freelancers. Securely accept payments in ETH, WETH, USDC, USDT, DAI, XDAI, WBTC, and many more tokens!"/>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smart Invoice"/>
        <meta property="og:image" content="https://smartinvoice.xyz/meta/home-graphic.png"/>
        <meta property="og:url" content="https://smartinvoice.xyz"/>
        <meta name="twitter:card" content="https://smartinvoice.xyz/meta/about-graphic.png"/>
        <meta name="twitter:image:alt" content="Crypto Invoicing & Escrow Tool"/>
        <meta name="twitter:site" content="@SmartInvoiceXYZ"/>
        <link rel="icon" href="/logos/smart-invoice/icon-blue.svg" />
      </Head>
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

      <NavBar />
      <Box flexGrow={1}>{children}</Box>
      <Footer />
    </Flex>
  );
}
