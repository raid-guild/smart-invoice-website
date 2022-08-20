import {
  Box,
  Flex,
  Heading,
  HStack,
  Slide,
  Text,
  useInterval,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import React, { useState } from 'react';

import quoteIcon from '../../public/quote-icon.svg';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      quote:
        "This is the best invoicing tool we've ever used to accept crypto payments. It rocks!",
      name: 'John Smith',
      title: 'Title',
      company: 'Company',
    },
    {
      id: 2,
      quote: 'Another testimonial statement.',
      name: 'Jane Doe',
      title: 'Title',
      company: 'Company',
    },
    {
      id: 3,
      quote: 'Hello world!',
      name: 'Joe Jones',
      title: 'Title',
      company: 'Company',
    },
  ];

  useInterval(toggleInterval, 5000);

  function toggleInterval() {
    if (index + 1 < testimonials.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <Flex
      direction="column"
      background="blue.dark"
      justify="center"
      align="center"
      padding={8}
    >
      {testimonials.map((t, i) => (
        <Slide
          key={t.id}
          in={i === index}
          direction="left"
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '700px',
          }}
        >
          <Flex
            display={i === index ? 'flex' : 'none'}
            direction="column"
            align="center"
            justify="center"
            textColor="white"
            textAlign="center"
            height={400}
            width="100%"
            maxWidth={700}
            paddingY={6}
          >
            <NextImage src={quoteIcon} width={41} height={33} />
            <Heading textColor="white" fontSize={50} fontWeight={700} mt={10}>
              {t.quote}
            </Heading>
            <Box textAlign="center" mt={10}>
              <Text fontWeight={700} fontSize={18}>
                {t.name}
              </Text>
              <Text fontSize={16}>
                {t.title}, {t.company}
              </Text>
            </Box>
          </Flex>
        </Slide>
      ))}
      <HStack gap={0.1} mt={6}>
        {testimonials.map((t, i) => (
          <Box
            key={t.id}
            height={1}
            width={10}
            borderRadius={5}
            background={i === index ? 'blue.1' : 'white'}
            onClick={() => setIndex(i)}
          />
        ))}
      </HStack>
    </Flex>
  );
}
