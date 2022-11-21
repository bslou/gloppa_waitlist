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
import { auth, db } from "../../api/firebaseconfig";

const Product = () => {
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
    <Flex
      direction={"column"}
      alignItems={"center"}
      width={"100vw"}
      backgroundColor={"#323232"}
    >
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
      <Flex marginTop={"90"} direction={"column"} alignItems={"center"}>
        <Image
          src={"/assets/pic.png"}
          alt={"Gloppa sample"}
          width={950}
          height={750}
        />
      </Flex>

      <Flex
        direction={"column"}
        alignItems={"center"}
        marginTop={15}
        marginBottom={15}
      >
        <Text
          color={"white"}
          fontSize={{ base: "30pt", md: "40pt", lg: "50pt" }}
        >
          Welcome to your fun office!
        </Text>
        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={41}
          gap={10}
        >
          <Flex
            direction={"column"}
            alignItems={"left"}
            justifyContent={"center"}
            width={{ base: 100, md: 225, lg: 350 }}
          >
            <Image
              src={"/assets/lineOne.png"}
              alt={"Gloppa line one"}
              width={350}
              height={2}
            />
            <Text
              fontSize={{ base: "20pt", md: "30pt", lg: "40pt" }}
              color={"white"}
              fontWeight={600}
            >
              Goals
            </Text>
            <Text
              color={"white"}
              fontWeight={200}
              fontSize={{ base: "15pt", md: "20pt", lg: "25pt" }}
            >
              Set short and long term goals you have for the startup.
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"left"}
            justifyContent={"center"}
            width={{ base: 100, md: 225, lg: 350 }}
          >
            <Image
              src={"/assets/lineTwo.png"}
              alt={"Gloppa line two"}
              width={350}
              height={2}
            />
            <Text
              fontSize={{ base: "20pt", md: "30pt", lg: "40pt" }}
              color={"white"}
              fontWeight={600}
            >
              Achieve
            </Text>
            <Text
              color={"white"}
              fontWeight={200}
              fontSize={{ base: "15pt", md: "20pt", lg: "25pt" }}
            >
              Achieve your goals that you set easily through Gloppa
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"left"}
            justifyContent={"center"}
            width={{ base: 100, md: 225, lg: 350 }}
            marginTop={47}
          >
            <Image
              src={"/assets/lineThree.png"}
              alt={"Gloppa line three"}
              width={350}
              height={2}
            />
            <Text
              fontSize={{ base: "20pt", md: "30pt", lg: "40pt" }}
              color={"white"}
              fontWeight={600}
            >
              Game
            </Text>
            <Text
              color={"white"}
              fontWeight={200}
              fontSize={{ base: "15pt", md: "20pt", lg: "25pt" }}
            >
              Play a fun game, and have fun during the process of building a
              startup
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        marginTop={40}
        width={"100vw"}
        height={"100vh"}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        bgGradient="linear(to-r, #00E7A1, #0049B6)"
      >
        <Image
          src={"/assets/game.png"}
          alt={"Gloppa game"}
          width={100}
          height={100}
        />
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text
            color={"white"}
            fontWeight={200}
            fontSize={"25pt"}
            textAlign={"center"}
          >
            Gloppa is your startup
            <br />
            entertainment center
          </Text>
        </Flex>
        <Flex gap={5} direction={"column"} marginTop={10}>
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={5}
          >
            <Image
              src={"/assets/money.png"}
              alt="Gloppa money"
              width={"40"}
              height={"40"}
            />
            <Text color={"white"} fontWeight={200} fontSize={"18pt"}>
              Earn coins and upgrade
            </Text>
          </Flex>
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={5}
          >
            <Image
              src={"/assets/party.png"}
              alt="Gloppa money"
              width={"40"}
              height={"40"}
            />
            <Text color={"white"} fontWeight={200} fontSize={"18pt"}>
              Have fun and enjoy
            </Text>
          </Flex>
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={5}
          >
            <Image
              src={"/assets/mission.png"}
              alt="Gloppa money"
              width={"40"}
              height={"40"}
            />
            <Text color={"white"} fontWeight={200} fontSize={"18pt"}>
              Achieve startup goals
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        direction={"row"}
        alignItems={"center"}
        backgroundColor={"black"}
        padding={7}
        width={"100vw"}
        fontSize={"14pt"}
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

export default Product;
