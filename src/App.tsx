import { useState } from "react";
import SvgData from "./components/SvgData";
import { Container, Flex, HStack, VStack } from "@chakra-ui/react";
import Swatches from "./components/Swatches";
import ColorInput from "./components/ColorInput";
import Size from "./components/Size";
import colorPalette from "./services/color-palette";

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

  // on color palette click
  const onColorPaletteClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    color: string
  ) => {
    setColor(color);
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
            <Swatches
              colorPalette={colorPalette}
              onColorPaletteClick={onColorPaletteClick}
            />
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
