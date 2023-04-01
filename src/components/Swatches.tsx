import { HStack, Text, Grid, Box } from "@chakra-ui/react";
import colorPalette from "../services/color-palette";

function Swatches() {
  return (
    <div>
      <Text textAlign={"left"} fontSize={"2xl"} pb={3}>
        Colors:{" "}
      </Text>

      <Grid templateColumns={"repeat(5, 1fr)"} gap={6} maxW={"600px"}>
        {colorPalette.map((color, index) => (
          <Box key={index} bg={color} boxSize={"64px"}></Box>
        ))}
      </Grid>
    </div>
  );
}

export default Swatches;
