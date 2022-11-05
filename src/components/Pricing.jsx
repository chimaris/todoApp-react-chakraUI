import { Box, Flex, Heading, Text, Button, HStack, Icon, Stack } from '@chakra-ui/react'
import React from 'react'
import CheckIcon from '../icons/Icon'

export const ListItem = (props) => {
    return (
        <HStack as='li' spacing='20px'>
            <Icon as={CheckIcon} w='32px' h='22px' />
            <Text>{props.children}</Text>
        </HStack>
    )
}

const Pricing = () => {
    return (
        <Box maxW='900px' margin='auto' mt='-256' borderRadius='12px' overflow='hidden' boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)' >
            <Flex direction={['column', 'column', 'row']} >
                <Box bg='#F0EAFB' p='50px' w={['90%', '90%', '35%']}>
                    <Text fontSize='24px' fontWeight='800'>Premium PRO</Text>
                    <Heading as='h3' fontSize='60px'>$329</Heading>
                    <Text color='#171923' fontSize='18px' fontWeight='500' mt='8px'>billed just once</Text>
                    <Button colorScheme='purple' size='lg' w={['130px', '200px']} mt='24px'>Get Started</Button>
                </Box>
                <Box p='50px' fontSize={['14px', '14px', '18px']} w={['90%', '90%', '65%']} bg='white'>
                    <Text textAlign='left'>Access these features when you get this pricing package for your business</Text>
                    <Stack as='ul' spacing="20px" pt='24px'>
                        <ListItem>International calling and message API</ListItem>
                        <ListItem>Additional phone numbers</ListItem>
                        <ListItem>Automated messages via Zapier</ListItem>
                        <ListItem>24/7 support and consulting</ListItem>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}

export default Pricing