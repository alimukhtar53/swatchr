import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Box,
  Icon,
  HStack,
  Heading,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py={{ base: "4", md: "2" }}
      bg="bg-surface"
      boxShadow="md"
      width={"full"}
      bgColor={"gray.800"}
    >
      <Container py={{ base: "4", lg: "5" }} maxW="1200px">
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack justify="space-between" direction="row" align="center">
            <HStack justifyContent={"center"} alignItems={"baseline"}>
              <Text fontSize="sm" textColor={"gray.500"}>
                Made with &nbsp;
                <Icon
                  className="pulse"
                  textColor={"red.500"}
                  as={SiTypescript}
                  fontSize={"xl"}
                />
              </Text>
            </HStack>
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                target="_blank"
                href="https://www.linkedin.com/in/ali-mukhtar-3082518b/"
                aria-label="LinkedIn"
                colorScheme={"twitter"}
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                target="_blank"
                href="https://github.com/alimukhtar53"
                aria-label="GitHub"
                colorScheme={"twitter"}
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                target="_blank"
                href="https://twitter.com/alee_hun_yar"
                aria-label="Twitter"
                colorScheme={"twitter"}
                icon={<FaTwitter fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
