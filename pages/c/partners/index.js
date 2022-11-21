import {
  Button,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure,
  useToast,
  Link,
} from "@chakra-ui/react";
import { auth, db } from "../../firebaseconfig";
import Image from "next/image";
import NextLink from "next/link";
import { useState } from "react";

const Partners = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const [eml, setEml] = useState("");
  const [email, setEmail] = useState("");
  const toast = useToast();
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const saveDB = (e) => {
    e.preventDefault();
    if (validateEmail(eml)) {
      db.collection("waitlist").add({
        email: eml,
      });
      setEml("");
      toast({
        title: "Email registered!",
        description: "Email just registered to database!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      //toast wrong
      toast({
        title: "Email in wrong format!",
        description:
          "This email format is incorrect making it wrong and invalid!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const saveDBase = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      db.collection("partners").add({
        email: email,
      });
      setEmail("");
      toast({
        title: "Email registered!",
        description: "Email just registered to database!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      //toast wrong
      toast({
        title: "Email in wrong format!",
        description:
          "This email format is incorrect making it wrong and invalid!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <Flex direction={"column"} alignItems={"center"} width={"100vw"}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Join Waitlist</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={(e) => saveDB(e)}>
              <Flex direction={"column"} alignItems={"left"} marginBottom={3}>
                <Text>Email</Text>
                <Input
                  type={"text"}
                  autoComplete
                  required
                  value={eml}
                  onChange={(e) => {
                    setEml(e.target.value);
                  }}
                  placeholder={"one.example@gmail.com"}
                />
                <Button
                  colorScheme="blue"
                  width={100}
                  marginTop={3}
                  marginLeft={155}
                  type={"submit"}
                >
                  Submit
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpen2} onClose={onClose2}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Partner with us</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={(e) => saveDBase(e)}>
              <Flex direction={"column"} alignItems={"left"} marginBottom={3}>
                <Text>Email</Text>
                <Input
                  type={"text"}
                  autoComplete
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder={"one.example@gmail.com"}
                />
                <Button
                  colorScheme="blue"
                  width={100}
                  marginTop={3}
                  marginLeft={155}
                  type={"submit"}
                >
                  Submit
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Flex
        direction={"row"}
        width={"100vw"}
        alignItems={"center"}
        justifyContent={"space-between"}
        backgroundColor={"#000"}
        padding={"4"}
        position={"fixed"}
        top={0}
        left={0}
        as="nav"
        zIndex={100}
      >
        <NextLink href={"/"}>
          <Link color={"white"} fontWeight={600} fontSize={"20pt"}>
            Gloppa
          </Link>
        </NextLink>
        <Flex direction={"row"} alignItems={"center"} gap={"10"}>
          <NextLink href={"/c/product"}>
            <Link color={"white"}>Product</Link>
          </NextLink>
          <NextLink href={"/c/about"}>
            <Link color={"white"}>About</Link>
          </NextLink>
          <NextLink href={"/c/partners"}>
            <Link color={"white"}>Partners</Link>
          </NextLink>
          <NextLink href={"/c/careers"}>
            <Link color={"white"}>Careers</Link>
          </NextLink>
          <NextLink href={"/c/contact"}>
            <Link color={"white"}>Contact</Link>
          </NextLink>

          <Button
            backgroundColor={"#0094FF"}
            paddingLeft={5}
            paddingRight={5}
            paddingTop={2}
            paddingBottom={2}
            color={"black"}
            borderRadius={20}
            onClick={onOpen}
          >
            Join waitlist
          </Button>
        </Flex>
      </Flex>

      <Flex
        marginTop={90}
        direction={"column"}
        alignItems={"center"}
        width={"90vw"}
        gap={10}
        marginBottom={20}
      >
        <Flex direction={"column"} alignItems={"center"}>
          <Text
            fontWeight={600}
            fontSize={{ base: "14pt", md: "22pt", lg: "30pt" }}
          >
            partner with
          </Text>
          <Text
            fontWeight={600}
            fontSize={{ base: "40pt", md: "50pt", lg: "60pt" }}
          >
            Gloppa
          </Text>
        </Flex>
        <Text
          fontSize={{ base: "14pt", md: "22pt", lg: "30pt" }}
          fontWeight={200}
        >
          We are making startups funner and easier for others to work and
          create. If you are a startup also looking to help other startups, we
          would love to connect and possibly partner! If you'd rather prefer
          emailing, then our email is dreammateofficial@gmail.com. We look
          forward to connecting soon :)
        </Text>
        <Button
          width={{ base: 90, md: 130, lg: 180 }}
          height={{ base: 90, md: 130, lg: 180 }}
          backgroundColor={"black"}
          borderRadius={"50%"}
          color={"white"}
          fontSize={{ base: "16pt", md: "22pt", lg: "25pt" }}
          onClick={onOpen2}
        >
          Get
          <br />
          Started
        </Button>
      </Flex>

      <Flex
        direction={"row"}
        alignItems={"center"}
        backgroundColor={"black"}
        padding={7}
        width={"100vw"}
        fontSize={"14pt"}
        marginTop={100}
        justify="space-between"
      >
        <NextLink href={"/"}>
          <Link
            color={"white"}
            fontWeight={700}
            fontSize={"25pt"}
            marginRight={"33vw"}
          >
            Gloppa
          </Link>
        </NextLink>
        <Flex direction={"row"} alignItems={"center"} gap={20}>
          <NextLink
            href={"https://www.linkedin.com/in/benjamin-sloutsky-9b9b09235/"}
            target={"_blank"}
            passHref
          >
            <Link color={"white"}>LinkedIn</Link>
          </NextLink>
          <NextLink
            href={"https://twitter.com/GloppaG"}
            target={"_blank"}
            passHref
          >
            <Link color={"white"}>Twitter</Link>
          </NextLink>
          <NextLink href={"/c/terms"}>
            <Link color={"white"}>Terms</Link>
          </NextLink>
          <NextLink href={"/c/privacy"}>
            <Link color={"white"}>Privacy</Link>
          </NextLink>
          <Text color={"white"} width={"10vw"} fontSize={"13pt"}>
            ©Gloppa, 2022 All rights reserved
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Partners;
