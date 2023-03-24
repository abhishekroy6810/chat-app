import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { Chatbox, Header, MyChats } from "../components/index";
import { ChatState } from "../context/ChatProvider";

const ChatsPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
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
        {user && <Header />}
        <Box display="flex" justifyContent="space-between" mt={3} h="90%">
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && (
            <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ChatsPage;
