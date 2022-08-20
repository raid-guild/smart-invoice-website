import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import NextImage from 'next/image'
import NextLink from 'next/link'

import launchninjaPfp from '../../public/pfp/launchninja.svg'
import plorPfp from '../../public/pfp/plor.svg'
import tufnelPfp from '../../public/pfp/tufnel.svg'
import georgehPfp from '../../public/pfp/georgeh.svg'
import spengrahPfp from '../../public/pfp/spengrah.svg'
import dan13ramPfp from '../../public/pfp/dan13ram.svg'
import manoPfp from '../../public/pfp/manolingam.svg'

import facebookIcon from '../../public/icons/socials/facebook.svg'
import githubIcon from '../../public/icons/socials/github.svg'
import twitterIcon from '../../public/icons/socials/twitter.svg'

export function TeamSection({...props}) {
  const teamMembers = [
    {
      name: 'launchninja',
      position: 'Product Lead',
      pfp: launchninjaPfp,
      twitter: '#'
    },
    {
      name: 'plor',
      position: 'Project Manager',
      pfp: plorPfp,
      twitter: '#',
      github: '#'
    },
    {
      name: 'Tufnel_Enterprises',
      position: 'Developer',
      pfp: tufnelPfp,
      github: '#'
    },
    {
      name: 'georgeh',
      position: 'Developer',
      pfp: georgehPfp,
      github: '#'
    },
    {
      name: 'spengrah',
      position: 'Developer',
      pfp: spengrahPfp,
      twitter: '#'
    },
    {
      name: 'dan13ram',
      position: 'Developer',
      pfp: dan13ramPfp,
      twitter: '#'
    },
    {
      name: 'manolingam',
      position: 'Developer',
      pfp: manoPfp,
      twitter: '#'
    },
    {
      name: 'arentweall',
      position: 'Developer',
      pfp: launchninjaPfp,
      facebook: '#',
      twitter: '#',
      github: '#'
    }
  ]

  return (
    <Box background='blue.dark' textColor='white' padding={20}>
      <Heading textAlign='center' textColor='white' mb={4}>
        Our Team
      </Heading>
      <Text textAlign='center'>
        Meet the people behind Smart Invoice.
      </Text>
      <Flex width='100%' justify='center' align='center' mt={20}>
        <Grid gridTemplateColumns='repeat(auto-fit, minmax(200px, 1fr))' gap={6} width='100%' maxWidth={1000}>
          {teamMembers.map(member => (
            <GridItem
              key={`griditem-${member.name}`}
              display='flex'
              flexDir='column'
              alignItems='center'
              background='white'
              borderRadius={10}
              padding={8}
              minHeight={400}
            >
              <NextImage src={member.pfp} width={180} height={180} objectFit='cover' />
              <Heading fontSize={24} textColor='gray.dark' mt={4}>
                {member.name}
              </Heading>
              <Text textColor='blue.dark' fontSize={18} mt={1}>
                {member.position}
              </Text>
              <Flex justify='center' align='center' gap={4} mt={6}>
                {member.facebook && (
                  <NextLink href={member.facebook} passHref>
                    <Flex cursor='pointer'>
                      <NextImage src={facebookIcon} width={48} height={48} />
                    </Flex>
                  </NextLink>
                )}
                {member.twitter && (
                  <NextLink href={member.twitter} passHref>
                    <Flex cursor='pointer'>
                      <NextImage src={twitterIcon} width={48} height={48} />
                    </Flex>
                  </NextLink>
                )}
                {member.github && (
                  <NextLink href={member.github} passHref>
                    <Flex cursor='pointer'>
                      <NextImage src={githubIcon} width={48} height={48} />
                    </Flex>
                  </NextLink>
                )}
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  )
}