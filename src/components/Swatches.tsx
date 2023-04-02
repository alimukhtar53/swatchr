import { Text, Grid, Box } from "@chakra-ui/react";

interface Props {
  colorPalette: string[];
  onColorPaletteClick?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    color: string
  ) => void;
}

function Swatches({ colorPalette, onColorPaletteClick }: Props) {
  return (
    <div>
      <Text textAlign={"left"} fontSize={"2xl"} pb={3}>
        Colors:{" "}
      </Text>

      <Grid templateColumns={"repeat(5, 1fr)"} gap={6} maxW={"600px"}>
        {colorPalette.map((color, index) => (
          <Box
            key={index}
            bg={color}
            boxSize={"64px"}
            onClick={(e) =>
              onColorPaletteClick && onColorPaletteClick(e, color)
            }
          ></Box>
        ))}
      </Grid>
    </div>
  );
}

export default Swatches;
