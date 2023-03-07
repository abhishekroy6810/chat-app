import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [photo, setPhoto] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const submitHandler = async () => {
    setLoading(true);

    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Please Fill All The Fields",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });

      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Password Do Not Match",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });

      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/user/register",
        { name, email, password, photo },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      toast({
        title: "Error Occured",
        status: "error",
        description: error.response.data,
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });

      setLoading(false);
    }
  };

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
      <Box>
        <Avatar
          src={photo}
          size="2xl"
          onClick={() => myWidget.open()}
          cursor="pointer"
        />
      </Box>
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
          onChange={(e) => setEmail(e.target.value)}
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
      <Button
        bg="blue.600"
        color="white"
        _hover={{ bg: "blue.700" }}
        w="100%"
        onClick={submitHandler}
        isLoading={loading}
      >
        Register
      </Button>
    </VStack>
  );
};

export default Register;
