import { HStack, Text, Grid, Box } from "@chakra-ui/react";
import colorPalette from "../services/color-palette";

function Swatches() {
  return (
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
  );
}

export default Swatches;
