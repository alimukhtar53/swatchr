import { useState, useRef } from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";

interface Props {
  svgCode: string;
}

function ModalBox({ svgCode }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCopied, setIsCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCopy = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      document.execCommand("copy");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    }
  };

  return (
    <>
      <Box
        as="button"
        onClick={onOpen}
        disabled={!svgCode && true}
        bg="facebook.500"
        rounded={"md"}
        textColor={"white"}
        lineHeight={"10"}
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        _hover={{ bg: "facebook.800" }}
      >
        Copy code {`</>`}
      </Box>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        motionPreset="slideInBottom"
        size={"5xl"}
      >
        <ModalOverlay
          bg="blackAlpha.800"
          backdropFilter="auto"
          backdropBlur="20px"
        />
        <ModalContent>
          <ModalHeader>SVG Code:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              readOnly={true}
              value={String(svgCode)}
              height={"600px"}
              fontFamily={"monospace"}
              fontSize={"1rem"}
              padding={3}
              bgColor={"gray.100"}
              w={"full"}
              ref={textareaRef}
            ></Textarea>
          </ModalBody>
          <ModalFooter gap={3}>
            <Button
              colorScheme="facebook"
              onClick={handleCopy}
              disabled={!svgCode && true}
            >
              {isCopied ? "Copied!" : "Copy"}
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalBox;
