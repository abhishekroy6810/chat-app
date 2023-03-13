import { Box } from "@chakra-ui/react";
import React from "react";

const ChatsPage = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="black"
    >
      <Box
        width={{ base: "100%", md: "95%" }}
        height={{ base: "100%", md: "95%" }}
        bg="white"
        borderRadius="lg"
        boxShadow="lg"
        borderWidth="3px"
        p={3}
      >
        header
        <Box
          display="flex"
          justifyContent="space-between"
        >
          <span>my chats</span>
          <span>chat box</span>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatsPage;
