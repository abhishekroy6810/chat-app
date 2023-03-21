import React, { useEffect } from "react";
import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Login, Register } from "../components/index";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, [navigate]);

  return (
    <Container
      centerContent
      mt="40px"
      p="5px"
      maxW={{ base: "sm", md: "md", lg: "lg" }}
      borderRadius="lg"
      boxShadow="lg"
      borderWidth="3px"
    >
      <Text
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        p={3}
        color="blue.600"
        fontWeight="medium"
      >
        Chatify
      </Text>
      <Tabs isFitted w="100%">
        <TabList>
          <Tab>Login</Tab>
          <Tab>Register</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login />
          </TabPanel>
          <TabPanel>
            <Register />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default HomePage;
