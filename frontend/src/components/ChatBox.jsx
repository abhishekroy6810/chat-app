import { Box } from "@chakra-ui/react";
import React from "react";
import { ChatState } from "../context/ChatProvider";
import { Chats } from "./index";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", lg: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      w={{ base: "100%", lg: "69%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Chats fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
