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
  Textarea,
  Link,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { auth, db } from "../../firebaseconfig";
import Image from "next/image";
import NextLink from "next/link";
import { useState } from "react";

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [eml, setEml] = useState("");
  const toast2 = useToast();
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bmjv4hd",
        "template_2ip0ncm",
        e.target,
        "JfLC0fGpwy8w9QTCJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast2({
            title: "Message submitted!",
            description: "The message successfully submitted!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setEmail("");
          setPhone("");
          setFirstName("");
          setLastName("");
          setMsg("");
        },
        (error) => {
          console.log(error.text);
          toast2({
            title: "Message did not submit!",
            description: "There was some error so the message did not submit!",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      );
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
                  type={"email"}
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
        >
          <Text
            fontWeight={600}
            fontSize={{ base: "20pt", md: "30pt", lg: "40pt" }}
          >
            Let's make something
          </Text>
          <Text
            fontWeight={600}
            fontSize={{ base: "20pt", md: "30pt", lg: "40pt" }}
          >
            great together
          </Text>
          <Text
            fontWeight={300}
            fontSize={{ base: "15pt", md: "20pt", lg: "30pt" }}
          >
            We are looking forward
          </Text>
          <Text
            fontWeight={300}
            fontSize={{ base: "15pt", md: "20pt", lg: "30pt" }}
          >
            to hearing from you!
          </Text>
        </Flex>
        <form
          onSubmit={(e) => {
            sendEmail(e);
          }}
        >
          <Flex direction={"column"} alignItems={"center"} gap={7}>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={10}
            >
              <Flex
                direction={"column"}
                alignItems={"left"}
                width={{ base: 210, md: 310, lg: 450 }}
                gap={1}
              >
                <Text>First Name *</Text>
                <Input
                  borderColor={"#808080"}
                  required
                  paddingTop={6}
                  paddingBottom={6}
                  value={firstName}
                  name={"first_name"}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Flex>
              <Flex
                direction={"column"}
                alignItems={"left"}
                width={{ base: 210, md: 310, lg: 450 }}
                gap={1}
              >
                <Text>Last Name *</Text>
                <Input
                  borderColor={"#808080"}
                  required
                  paddingTop={6}
                  paddingBottom={6}
                  value={lastName}
                  name={"last_name"}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Flex>
            </Flex>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={10}
            >
              <Flex
                direction={"column"}
                alignItems={"left"}
                width={{ base: 210, md: 310, lg: 450 }}
                gap={1}
              >
                <Text>Email</Text>
                <Input
                  borderColor={"#808080"}
                  paddingTop={6}
                  paddingBottom={6}
                  value={email}
                  name={"email"}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Flex>
              <Flex
                direction={"column"}
                alignItems={"left"}
                width={{ base: 210, md: 310, lg: 450 }}
                gap={1}
              >
                <Text>Phone Number</Text>
                <Input
                  paddingTop={6}
                  paddingBottom={6}
                  borderColor={"#808080"}
                  value={phone}
                  name={"phone"}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Flex>
            </Flex>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={10}
            >
              <Flex
                direction={"column"}
                alignItems={"left"}
                width={{ base: 460, md: 750, lg: 940 }}
                gap={1}
              >
                <Text>Message *</Text>
                <Textarea
                  height={200}
                  required
                  paddingTop={6}
                  paddingBottom={6}
                  borderColor={"#808080"}
                  name={"message"}
                  value={msg}
                  onChange={(e) => {
                    setMsg(e.target.value);
                  }}
                />
              </Flex>
            </Flex>
            <Button
              type="submit"
              color={"white"}
              backgroundColor={"#A6CBEB"}
              paddingLeft={9}
              paddingRight={9}
              paddingTop={6}
              paddingBottom={6}
              fontSize={"18pt"}
            >
              Send
            </Button>
          </Flex>
        </form>
      </Flex>

      <Flex marginTop={"90"} direction={"column"} alignItems={"center"}>
        <Image
          src={"/assets/bottom.png"}
          alt={"Gloppa Bottom"}
          width={500}
          height={20}
        />
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

export default Contact;
