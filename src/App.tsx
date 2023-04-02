import { useState } from "react";
import SvgData from "./components/SvgData";
import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import Swatches from "./components/Swatches";
import ColorInput from "./components/ColorInput";
import Size from "./components/Size";
import colorPalette from "./services/color-palette";
import HeroHeadline from "./components/HeroHeadline";
import NavBar from "./components/NavBar";

function App() {
  const [color, setColor] = useState("#FAC8D8");
  const [size, setSize] = useState(256);
  const [activeColor, setActiveColor] = useState("");

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
    setActiveColor(color);
  };
  return (
    <VStack className="container">
      <NavBar />
      <Container maxW="1200px">
        <Box alignItems={"center"} my={8}>
          <HeroHeadline />
          <Flex
            maxW={"512px"}
            height={"512px"}
            justifyContent={"center"}
            alignItems={"center"}
            margin={"auto"}
            padding={8}
          >
            <SvgData color={color} width={size} height={size} />
          </Flex>
          <Flex w={"md"} gap={5} flexDirection={"column"} margin={"auto"}>
            <Size onSizeSelect={onSizeSelectHandler} />
            <Swatches
              activeColor={activeColor}
              colorPalette={colorPalette}
              onColorPaletteClick={onColorPaletteClick}
            />
            <ColorInput
              color={color}
              onColorChangeHandler={onColorChangeHandler}
            />
          </Flex>
        </Box>
      </Container>
    </VStack>
  );
}

export default App;
