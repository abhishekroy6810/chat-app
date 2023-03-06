import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = () => {};

  return (
    <VStack>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          type="email"
          variant="flushed"
          onChange={() => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Password"
            type={show ? "text" : "password"}
            variant="flushed"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement>
            <Button size="sm" onClick={handleClick}>
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        bg="blue.600"
        color="white"
        w="100%"
        _hover={{ bg: "blue.700" }}
        onClick={submitHandler}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;
