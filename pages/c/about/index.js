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

const About = () => {
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
      <Flex
        position={"absolute"}
        left={0}
        top={"130vh"}
        width={{ base: 50, md: 110, lg: 160 }}
      >
        <Image
          src={"/assets/leftCloud.png"}
          alt={"Gloppa left cloud"}
          width={160}
          height={400}
        />
      </Flex>
      <Flex
        position={"absolute"}
        right={0}
        top={"20vh"}
        width={{ base: 50, md: 110, lg: 160 }}
      >
        <Image
          src={"/assets/rightCloud.png"}
          alt={"Gloppa left cloud"}
          width={160}
          height={400}
        />
      </Flex>
      <Flex direction={"column"} alignItems={"center"} gap={"11vh"}>
        <Flex
          marginTop={"50"}
          direction={"column"}
          alignItems={"center"}
          gap={11}
        >
          <Image
            src={"/assets/topBent.png"}
            alt={"Gloppa Bent"}
            width={500}
            height={20}
          />
        </Flex>
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"55vw"}
          gap={"8"}
        >
          <Text
            fontSize={{ base: "20pt", md: "26pt", lg: "33pt" }}
            fontWeight={600}
          >
            We unite fun and creating startups
          </Text>
          <Text fontSize={{ base: "13pt", md: "18pt", lg: "22pt" }}>
            We understand that working on startups may be a grueling and
            difficult process, as there may be easy and hard days. Gloppa allows
            you to enjoy the process even in the hardest of times!
          </Text>
        </Flex>
        <Image
          src={"/assets/work.png"}
          alt={"Gloppa work"}
          width={1000}
          height={800}
        />
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"55vw"}
          gap={"3"}
        >
          <Text
            fontSize={{ base: "20pt", md: "26pt", lg: "33pt" }}
            fontWeight={600}
          >
            We are startup enthusiasts and creators hoping to make it fun
          </Text>
          <Text fontSize={{ base: "13pt", md: "18pt", lg: "22pt" }}>
            Initially the startup process may be fun, but as you progress, it
            gets more tedious and consequently more discouraging. With Gloppa,
            we hope to make the process as fun as a video game!
          </Text>
        </Flex>
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"55vw"}
          gap={"3"}
          marginBottom={"10vh"}
        >
          <Text
            fontSize={{ base: "20pt", md: "26pt", lg: "33pt" }}
            fontWeight={600}
          >
            We are always looking for feedback!
          </Text>
          <Text fontSize={{ base: "13pt", md: "18pt", lg: "22pt" }}>
            We desperately want feedback, so if you have any words of
            recommendation or advice, please use the global.co/contact page to
            reach out to us!
          </Text>
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

export default About;
