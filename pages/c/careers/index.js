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
import { auth, db } from "../public/firebaseconfig";
import Image from "next/image";
import NextLink from "next/link";
import { useState } from "react";

const Careers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [eml, setEml] = useState("");
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

      <Flex direction={"column"} alignItems={"center"} marginTop={130} gap={3}>
        <Text
          fontWeight={600}
          fontSize={{ base: "24pt", md: "32pt", lg: "40pt" }}
        >
          Join our journey
        </Text>
        <Text
          fontSize={{ base: "18pt", md: "22pt", lg: "28pt" }}
          fontWeight={200}
        >
          We’re determined to help
        </Text>
        <Text
          fontSize={{ base: "18pt", md: "22pt", lg: "28pt" }}
          fontWeight={200}
        >
          people enjoy creating startups!
        </Text>
        <Image
          src={"/assets/careersImage.png"}
          alt={"Gloppa careers image"}
          width={1000}
          height={800}
        />
        <Text
          fontWeight={600}
          fontSize={{ base: "14pt", md: "18pt", lg: "23pt" }}
        >
          Open Positions
        </Text>
        <Flex direction={"column"} alignItems={"center"} gap={7}>
          <Text
            fontWeight={600}
            fontSize={{ base: "14pt", md: "18pt", lg: "23pt" }}
          >
            Engineering
          </Text>
          <NextLink
            href={"https://tally.so/r/3q5bz9"}
            passHref
            target={"_blank"}
          >
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text
                color={"#001AFF"}
                fontSize={{ base: "12pt", md: "14pt", lg: "18pt" }}
              >
                Backend Developer
              </Text>
              <Text
                color={"#808080"}
                fontSize={{ base: "12pt", md: "14pt", lg: "18pt" }}
              >
                Develop Firebase Backend * Contract
              </Text>
            </Flex>
          </NextLink>
          <NextLink
            href={"https://tally.so/r/n9Nd4V"}
            target={"_blank"}
            passHref
          >
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text
                color={"#001AFF"}
                fontSize={{ base: "12pt", md: "14pt", lg: "18pt" }}
              >
                Frontend Developer
              </Text>
              <Text
                color={"#808080"}
                fontSize={{ base: "12pt", md: "14pt", lg: "18pt" }}
              >
                Develop React Chakra Frontend * Contract
              </Text>
            </Flex>
          </NextLink>
        </Flex>
        <Flex direction={"column"} alignItems={"center"} gap={7} marginTop={5}>
          <Text
            fontWeight={600}
            fontSize={{ base: "14pt", md: "18pt", lg: "23pt" }}
          >
            Designer
          </Text>
          <NextLink
            href={"https://tally.so/r/m6DdVJ"}
            passHref
            target={"_blank"}
          >
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text
                color={"#001AFF"}
                fontSize={{ base: "12pt", md: "14pt", lg: "18pt" }}
              >
                UI/UX Designer
              </Text>
              <Text
                color={"#808080"}
                fontSize={{ base: "12pt", md: "14pt", lg: "18pt" }}
              >
                Design future releases using Figma * Part-Time
              </Text>
            </Flex>
          </NextLink>
        </Flex>
        <Flex direction={"column"} alignItems={"center"} gap={7} marginTop={5}>
          <Text
            fontWeight={600}
            fontSize={{ base: "14pt", md: "18pt", lg: "23pt" }}
          >
            Marketing
          </Text>
          <NextLink
            href={"https://tally.so/r/wkbYre"}
            passHref
            target={"_blank"}
          >
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text
                color={"#001AFF"}
                fontSize={{ base: "12pt", md: "14pt", lg: "18pt" }}
              >
                Marketer and PR
              </Text>
              <Text
                color={"#808080"}
                fontSize={{ base: "12pt", md: "14pt", lg: "18pt" }}
              >
                Send email and get in touch * Contract
              </Text>
            </Flex>
          </NextLink>
        </Flex>
        <Flex direction={"column"} alignItems={"center"} gap={7} marginTop={5}>
          <Text
            fontWeight={600}
            fontSize={{ base: "14pt", md: "18pt", lg: "23pt" }}
          >
            Social Media
          </Text>
          <NextLink
            href={"https://tally.so/r/3yXl7x"}
            passHref
            target={"_blank"}
          >
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text
                color={"#001AFF"}
                fontSize={{ base: "12pt", md: "14pt", lg: "18pt" }}
              >
                Social Media Manager
              </Text>
              <Text
                color={"#808080"}
                fontSize={{ base: "12pt", md: "14pt", lg: "18pt" }}
              >
                Post on Twitter and LinkedIn * Internship
              </Text>
            </Flex>
          </NextLink>
        </Flex>
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

export default Careers;
