import { Box, Center, Heading, Stack } from '@chakra-ui/react'
import React from 'react'

interface EhCardProps {
  title: string
  children: React.ReactNode
}

export const EhCard = ({ title, children }: EhCardProps) => (
  <Center py={6}>
    <Box w="70vw" bg="#222b45" boxShadow={'2xl'} rounded={'md'}>
      <Stack color="white" spacing="8" py="6" px="24" align={'center'}>
        <Heading>{title}</Heading>
        <Box fontWeight="500" rounded={'full'}>
          {children}
        </Box>
      </Stack>
    </Box>
  </Center>
)
