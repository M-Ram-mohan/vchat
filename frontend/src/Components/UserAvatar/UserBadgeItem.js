import { CloseIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React from 'react';
const UserBadgeItem = ({user, handleFunction}) => {
    return(
        <Box px={2} py={1} borderRadius="lg" m={1} mb={1} color="white"
        fontSize={15} backgroundColor="purple" cursor="pointer" onClick={handleFunction}>
            {user.name} <CloseIcon pl={1} />
        </Box>
    )
}
export default UserBadgeItem;