import { Box, Heading, HStack, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState, useEffect, useContext } from 'react'
import { VoteContext } from '../../context/VoteProvider'
import Langauge from './Langauge'

const boxStyle = {
    mt: '20px',
    border: '2px solid pink',
    maxW: '5xl',
    mx: 'auto',
    p: '4',
}
const headingStyle = {
    fontSize: ['30px', '30px', '40px'],
    mb: '8', // 8 * 4px = 32px
    fontWeight: 'extrabold',
    bgGradient: 'linear(to-r, pink.500, pink.300, purple.500)',
    bgClip: 'text'
}

const Vote = () => {

    const voteCtx = useContext(VoteContext);

    return (
        <Box sx={boxStyle}>
            <Heading sx={headingStyle}>Voting App</Heading>
            <VStack>
                <Heading mb={6} fontSize={['14px', '14px', '40px']}>Which is your best language?</Heading>
                <Langauge onClick={voteCtx.onLeft} width={voteCtx.leftWidth} name='JavaScript' />
                <Langauge onClick={voteCtx.onRight} width={voteCtx.rightWidth} name='Python' />
                <Heading as='h4' my={20}>{voteCtx.total} Votes</Heading>
            </VStack>
        </Box>
    )
}

export default Vote