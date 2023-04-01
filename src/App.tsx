import { useState } from "react";
import SvgData from "./components/SvgData";
import { Box, HStack, Text, Input, Grid } from "@chakra-ui/react";
import colorPalette from "./services/color-palette";

function App() {
  const [color, setColor] = useState("000000");

  const onColorChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  return (
    <>
      <SvgData color={color} width={512} height={512}></SvgData>
      <HStack>
        <Text fontSize={"2xl"} pr={5}>
          Colors:{" "}
        </Text>

        <Grid templateColumns={"repeat(5, 1fr)"} gap={6} maxW={"600px"}>
          {colorPalette.map((color, index) => (
            <Box key={index} bg={color} boxSize={"64px"}></Box>
          ))}
        </Grid>
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
    </>
  );
}

export default App;
