import { Text, Grid, Box, SimpleGrid } from "@chakra-ui/react";

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

      <SimpleGrid
        minChildWidth={"60px"}
        gap={{
          base: "2",
          md: "4",
          lg: "6",
        }}
        maxW={"600px"}
      >
        {colorPalette.map((color, index) => (
          <Box
            key={index}
            bg={color}
            borderRadius={"full"}
            shadow={"md"}
            boxSize={"64px"}
            outline={`${activeColor === color && "2px dashed #557593"}`}
            outlineOffset={4}
            borderColor={color}
            onClick={(e) =>
              onColorPaletteClick && onColorPaletteClick(e, color)
            }
          />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Swatches;
