import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Stack, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ChatState } from "../context/ChatProvider";
import { GroupModal, SkeletonAnim } from "./index";
import { getSender } from "../chatLogic/chatLogic";

const MyChats = ({ fetchAgain }) => {
  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
  const [loggedUser, setLoggedUser] = useState();
  const toast = useToast();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(
        "http://localhost:5000/chat/fetch",
        config
      );
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, [fetchAgain]);

  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", lg: "flex" }}
      flexDir="column"
      w={{ base: "100%", lg: "30%" }}
      borderRadius="lg"
      borderWidth="1px"
      p={2}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        fontSize={{ base: "18px", md: "20px", lg: "25px" }}
      >
        <Text>My Chats</Text>
        <GroupModal>
          <Button rightIcon={<AddIcon />} size={{ base: "sm", lg: "md" }}>
            New Group Chat
          </Button>
        </GroupModal>
      </Box>

      <Box
        display="flex"
        mt={2}
        flexDir="column"
        w="100%"
        h="100%"
        overflowY="hidden"
      >
        {chats ? (
          <Stack overflowY="scroll">
            {chats.map((chat) => {
              return (
                <Box
                  onClick={() => setSelectedChat(chat)}
                  cursor="pointer"
                  bg={selectedChat === chat ? "blue.600" : "#E8E8E8"}
                  color={selectedChat === chat ? "white" : "black"}
                  px={3}
                  py={2}
                  borderRadius="lg"
                  key={chat._id}
                >
                  <Text>
                    {!chat.isGroupChat
                      ? getSender(loggedUser, chat.users)
                      : chat.chatName}
                  </Text>
                  <Text fontSize="xs">Hello</Text>
                </Box>
              );
            })}
          </Stack>
        ) : (
          <SkeletonAnim />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;
