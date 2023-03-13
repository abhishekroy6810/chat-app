import React from "react";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          bg="blue.600"
          _hover={{ bg: "blue.700" }}
          color="white"
          onClick={onOpen}
        >
          <Search2Icon />
          <Text display={{ base: "none", md: "flex" }} p={4}>
            Search Users
          </Text>
        </Button>
        <Text
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          color="blue.600"
          fontWeight="medium"
        >
          Chatify
        </Text>
        <Menu>
          <MenuButton bg="white" as={Button} rightIcon={<ChevronDownIcon />}>
            <Avatar size="sm" cursor="pointer" name="Abhishek" src="" />
          </MenuButton>
          <MenuList>
            <MenuItem>My Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search Users To Chat</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button color="white" bg="blue.600" _hover={{ bg: "blue.700" }}>
              Search
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
