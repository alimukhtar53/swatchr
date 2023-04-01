import { useState } from "react";
import SvgData from "./components/SvgData";
import { Box, Container, Flex, HStack, Input, VStack } from "@chakra-ui/react";
import Swatches from "./components/Swatches";
import ColorInput from "./components/ColorInput";
import Size from "./components/Size";

function App() {
  const [color, setColor] = useState("#FFFFFF");
  const [size, setSize] = useState(512);

  const onColorChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  const onSizeSelectHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as HTMLInputElement;
    setSize(parseInt(target.value));
  };
  return (
    <VStack className="container">
      <Container maxW="1200px">
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <HStack
            maxW={"512px"}
            minW={"512px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <SvgData color={color} width={size} height={size}></SvgData>
          </HStack>
          <VStack gap={8}>
            <Size onSizeSelect={onSizeSelectHandler} />
            <Swatches />
            <ColorInput
              color={color}
              onColorChangeHandler={onColorChangeHandler}
            />
          </VStack>
        </Flex>
      </Container>
    </VStack>
  );
}

export default App;
