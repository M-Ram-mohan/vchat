import React from 'react';
import {ChatState} from '../../Context/ChatProvider';
import {Box} from '@chakra-ui/react'
import SingleChat from './SingleChat';

const ChatBox = ({fetchAgain,setFetchAgain}) => {
    const {selectedChat} = ChatState();
    return (
        <Box display={{ base:selectedChat ? "flex" : "none", md: "flex"}} flexDir="column" p={3}
        w={{base: "100%", md:"68%"}} bg="white" alignItems="center"
        borderRadius="lg" borderWidth="1px">
            <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>
        </Box>
    )
};
export default ChatBox;