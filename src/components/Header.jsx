import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

const Header = () => {
    return (
        <Box pb='112px' as='section'>
            <Box color='#F7FAFC' bg='#6B46C1' pt='80px' pb='198px' px='36px' textAlign={['left', 'left', 'center']}>
                <Heading fontWeight='800' fontSize={["3xl", "3xl", "5xl"]} bgGradient='linear(to-l, pink.500, pink.300, whiteAlpha.900)' bgClip='text' >Simple pricing for your business</Heading>
                <Text fontWeight='500' fontSize={['lg', 'lg', '2xl']} pt='16px'>Plans that are carefully crafted to suit your business.</Text>
            </Box>
        </Box>
    )
}

export default Header