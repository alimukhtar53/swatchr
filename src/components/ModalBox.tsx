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
      >
        <ModalOverlay />
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
            ></Textarea>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalBox;
