import { useState } from "react";
import SvgData from "./components/SvgData";
import { Box, Container, HStack, Input, VStack } from "@chakra-ui/react";
import Swatches from "./components/Swatches";

function App() {
  const [color, setColor] = useState("#FFFFFF");

  const onColorChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  return (
    <VStack className="container">
      <Container maxW="1200px">
        <HStack>
          <Box maxW={"512px"}>
            <SvgData color={color} width={512} height={512}></SvgData>
          </Box>
          <Swatches />
        </HStack>
        <Input
          width={"400px"}
          height={"100px"}
          border={"none"}
          padding={0}
          type="color"
          value={color}
          onChange={onColorChangeHandler}
        ></Input>
      </Container>
    </VStack>
  );
}

export default App;
