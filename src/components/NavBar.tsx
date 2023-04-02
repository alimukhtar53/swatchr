import { Box, Container, Image, HStack, Heading } from "@chakra-ui/react";
import logo from "../assets/paint-swatch.png";

export const NavBar = () => {
  return (
    <Box as="section" pb={{ base: "12", md: "24" }} width={"full"}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow="md"
        position={"fixed"}
        width={"full"}
        bgColor={"gray.800"}
        zIndex={"1000"}
      >
        <Container py={{ base: "4", lg: "5" }} maxW="1200px">
          <HStack spacing="3" justify="space-between" width={"44px"}>
            <Image src={logo} />
            <Heading
              fontWeight={"black"}
              borderBottom={"2px dashed wheat"}
              textColor={"wheat"}
            >
              Swatchr
            </Heading>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default NavBar;
