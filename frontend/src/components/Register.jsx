import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [photo, setPhoto] = useState();
  const [loading, setLoading] = useState(false);

  const submitHandler = () => {};

  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: import.meta.env.VITE_CLOUDNAME,
      uploadPreset: import.meta.env.VITE_UPLOADPRESET,
      cropping: true,
      clientAllowedFormats: ["jpg", "jpeg", "png"],
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        setPhoto(result.info.secure_url);
      }
    }
  );

  return (
    <VStack>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          type="text"
          variant="flushed"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
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
      <FormControl>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Confirm Password"
            type={show ? "text" : "password"}
            variant="flushed"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement>
            <Button size="sm" onClick={handleClick}>
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Profile Picture</FormLabel>
        <Button
          bg="blue.600"
          variant="solid"
          _hover={{ bg: "blue.700" }}
          color="white"
          onClick={() => myWidget.open()}
          w="100%"
        >
          Upload
        </Button>
      </FormControl>
      <img src={photo} style={{ width: "auto", height: "200px" }} />
      <Button
        bg="blue.600"
        color="white"
        _hover={{ bg: "blue.700" }}
        w="100%"
        onClick={submitHandler}
      >
        Register
      </Button>
    </VStack>
  );
};

export default Register;
