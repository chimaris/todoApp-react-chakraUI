import { HStack, Icon, Text, Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { MonthlySubscriptionIcon, HassleFreeIcon, MoneyBackGuaranteeIcon } from '../icons/Icon'


const Feature = (props) => {
    return (
        <HStack spacing='24px'>
            <Icon as={props.icon} boxSize='48px' />
            <Text textAlign='left' fontSize='18px' fontWeight='700'>{props.children}</Text>
        </HStack>
    )
}

const Features = (props) => {
    const { icon, children } = props;
    return (
        <Box maxW='1024px' m='auto' pt='60px' pb='32px'>
            <Stack px='48px' spacing='20px' direction={['column', 'column', 'row']}>
                <Feature icon={MonthlySubscriptionIcon}>30 days money back Guarantee</Feature>
                <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
                <Feature icon={MoneyBackGuaranteeIcon}>No monthly subscription Pay once and for all</Feature>
            </Stack>
        </Box>
    )
}

export default Features