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
import Image from "next/image";
import NextLink from "next/link";
import { useState } from "react";
import { db } from "./api/firebaseconfig";

const Home = () => {
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
        direction={"column"}
        alignItems={"center"}
        backgroundSize={"100% 100%"}
        width={"100vw"}
        height={"120vh"}
        marginTop={"70"}
        backgroundImage={"url(/assets/top.png)"}
        gap={10}
      >
        <Text
          fontSize={{ base: "60pt", md: "80pt", lg: "100pt" }}
          fontWeight={800}
          color={"white"}
          marginTop={10}
        >
          Gloppa
        </Text>
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text
            color={"white"}
            fontSize={{ base: "20pt", md: "30pt", lg: "40pt" }}
            textAlign={"center"}
          >
            Launching a startup is like playing
            <br />a video game
          </Text>
        </Flex>
        <Button
          backgroundColor={"black"}
          color={"white"}
          fontSize={{ base: "15pt", md: "20pt", lg: "25pt" }}
          padding={"8"}
          borderRadius={20}
          fontWeight={600}
          onClick={onOpen}
        >
          Join waitlist
        </Button>
      </Flex>
      <Flex marginTop={10} marginBottom={10}>
        <Image
          src={"/assets/pic.png"}
          width={1000}
          height={600}
          alt={"Gloppa Sample"}
        />
      </Flex>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"80vw"}
        gap={5}
        marginTop={50}
      >
        <Text
          fontWeight={700}
          fontSize={{ base: "22pt", md: "32pt", lg: "42pt" }}
        >
          Easy and fun way of creating a startup
        </Text>
        <Text
          fontWeight={200}
          fontSize={{ base: "15pt", md: "25pt", lg: "35pt" }}
        >
          Gloppa makes the process of creating a startup as fun as creating a
          video game! Having fun not only makes you happier but also helps you
          faster progress through advancing your startup!
        </Text>
      </Flex>
      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        marginTop={75}
        width={"100vw"}
      >
        <Flex width={{ base: 200, md: 250, lg: 300 }}>
          <Image
            src={"/assets/right.png"}
            width={300}
            height={1000}
            alt="Gloppa right"
          />
        </Flex>
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"60vw"}
          gap={10}
        >
          <Flex direction={"column"} alignItems={"center"}>
            <Text
              fontWeight={700}
              fontSize={{ base: "22pt", md: "32pt", lg: "42pt" }}
            >
              Do you want in?
            </Text>
            <Text
              fontSize={{ base: "15pt", md: "25pt", lg: "35pt" }}
              fontWeight={200}
            >
              We'll make sure
            </Text>
            <Text
              fontSize={{ base: "15pt", md: "25pt", lg: "35pt" }}
              fontWeight={200}
            >
              your startup experience
            </Text>
            <Text
              fontSize={{ base: "15pt", md: "25pt", lg: "35pt" }}
              fontWeight={200}
            >
              is better than ever!
            </Text>
          </Flex>
          <Button
            width={{ base: 100, md: 125, lg: 150 }}
            height={{ base: 100, md: 125, lg: 150 }}
            backgroundColor={"black"}
            borderRadius={"50%"}
            color={"white"}
            fontSize={{ base: "10pt", md: "14pt", lg: "18pt" }}
            onClick={onOpen}
          >
            Join the
            <br />
            Waitlist
          </Button>
        </Flex>
        <Flex width={{ base: 200, md: 250, lg: 300 }}>
          <Image src={"/assets/left.png"} width={300} height={1000} />
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

export default Home;
