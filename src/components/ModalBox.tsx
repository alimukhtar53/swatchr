import {
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
      <Button colorScheme={"facebook"} onClick={onOpen}>
        Copy code {`</>`}
      </Button>
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
