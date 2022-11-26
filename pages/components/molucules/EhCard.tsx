import { Box, Center, Heading, Stack } from '@chakra-ui/react'
import React from 'react'

interface EhCardProps {
  title: string
  children: React.ReactNode
}

const EhCard = ({ title, children }: EhCardProps) => (
  <Center py={6}>
    <Box
      w={{ base: '80vw', md: '60vw' }}
      bg="#222b45"
      boxShadow={'2xl'}
      rounded={'md'}
    >
      <Stack color="white" spacing="16" py="6vh" px="6vw" align={'center'}>
        <Heading size="2xl">{title}</Heading>
        <Box fontWeight="500" rounded={'full'}>
          {children}
        </Box>
      </Stack>
    </Box>
  </Center>
)

export default EhCard
