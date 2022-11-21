import React, { useContext, useEffect } from 'react'
import { Box, Heading, HStack, Spacer, Stack, Text, VStack } from '@chakra-ui/react'

import { VoteContext } from '../../context/VoteProvider';
import './voting.css';


const Langauge = ({ onClick, width, name }) => {

    const voteCtx = useContext(VoteContext);
    console.log("LeftWidth ", voteCtx.leftWidth, voteCtx.total, voteCtx.rightWidth);

    return (
        <HStack width={['270px', '350px']}>
            <Stack className='voteBox' width={['250px', '300px']} height='30px' border='2px solid black' borderRadius='20px' onClick={onClick}>
                <div className='myDiv' style={{ maxWidth: `${voteCtx.total && width}%` }} >
                    <p className='position'>{name}</p>
                </div>
                {/* <Stack bgGradient='linear(to-r, pink.500, pink.300, purple.500)' minWidth='20px' maxWidth={voteCtx.total && `${width}%`} height='30px' borderRadius='20px'>
                </Stack>*/}

            </Stack>
            <Spacer />
            <Text>{voteCtx.total && width.toFixed()}%</Text>
        </HStack>
    )
}

export default Langauge