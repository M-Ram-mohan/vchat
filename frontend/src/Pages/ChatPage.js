import React from 'react';
import { ChatState } from '../Context/ChatProvider';
import { Box } from '@chakra-ui/react';
import SideDrawer from '../Components/Miscellaneous/SideDrawer';
import ChatBox from '../Components/Miscellaneous/ChatBox';
import MyChats from '../Components/Miscellaneous/MyChats';

const ChatPage = () => {
    const {user} = ChatState();
    console.log(user);

    return (
        <div style={{width:'100%'}}>
            {user && <SideDrawer/>}
            <Box w="100%" h="91.5vh" p="10px" display='flex' justifyContent={'space-between'}>
                {user && <MyChats/>}
                {user && <ChatBox/>}
            </Box>
        </div>
    )
}

export default ChatPage;