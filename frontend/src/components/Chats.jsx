import { Box, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { ChatState } from "../context/ChatProvider";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { getSender, getSenderFull } from "../chatLogic/chatLogic";
import { ProfileModal, UpdateGroupChatModal } from "./index";

const Chats = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat, setSelectedChat, user } = ChatState();

  return (
    <>
      {selectedChat ? (
        <>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontSize={{ base: "28px", md: "30px" }}
            w="100%"
          >
            <IconButton
              display={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat("")}
            />

            {selectedChat.isGroupChat ? (
              <Box display="flex" justifyContent="space-between" w="100%">
                {selectedChat.chatName.toUpperCase()}
                <UpdateGroupChatModal
                  fetchAgain={fetchAgain}
                  setFetchAgain={setFetchAgain}
                />
              </Box>
            ) : (
              <Box display="flex" justifyContent="space-between" w="100%">
                {getSender(user, selectedChat.users)}
                <ProfileModal user={getSenderFull(user, selectedChat.users)} />
              </Box>
            )}
          </Box>
        </>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Text fontSize="2xl" pb={3}>
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  );
};

export default Chats;
