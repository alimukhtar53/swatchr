import { useState } from "react";
import SvgData from "./components/SvgData";
import { Box, Container, Flex, HStack, Input, VStack } from "@chakra-ui/react";
import Swatches from "./components/Swatches";
import ColorInput from "./components/ColorInput";

function App() {
  const [color, setColor] = useState("#FFFFFF");

  const onColorChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  return (
    <VStack className="container">
      <Container maxW="1200px">
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box maxW={"512px"}>
            <SvgData color={color} width={512} height={512}></SvgData>
          </Box>
          <VStack>
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
