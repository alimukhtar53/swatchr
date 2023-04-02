import { Text, Grid, Box } from "@chakra-ui/react";

interface Props {
  activeColor: string;
  colorPalette: string[];
  onColorPaletteClick?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    color: string
  ) => void;
}

function Swatches({ activeColor, colorPalette, onColorPaletteClick }: Props) {
  return (
    <div>
      <Text
        textAlign={"left"}
        fontSize={"xl"}
        pb={3}
        fontWeight={"bold"}
        textColor={"gray.700"}
      >
        Colors:{" "}
      </Text>

      <Grid templateColumns={"repeat(5, 1fr)"} gap={6} maxW={"600px"}>
        {colorPalette.map((color, index) => (
          <Box
            key={index}
            bg={color}
            boxSize={"64px"}
            outline={`${activeColor === color && "2px dashed #557593"}`}
            outlineOffset={2}
            borderColor={color}
            onClick={(e) =>
              onColorPaletteClick && onColorPaletteClick(e, color)
            }
          />
        ))}
      </Grid>
    </div>
  );
}

export default Swatches;
