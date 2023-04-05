import { Box, HStack, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

interface Props {
  onSizeSelect: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Size = ({ onSizeSelect }: Props) => {
  const size = "lg";
  return (
    <Stack
      direction={["column", "row", "row"]}
      alignItems={["flex-start", "center"]}
      spacing={[4, 0]}
      wrap="wrap"
    >
      <Box width={"full"}>
        <Text
          fontSize={["xl"]}
          pb={3}
          fontWeight={"bold"}
          textColor={"gray.700"}
        >
          Size:
        </Text>
      </Box>
      <RadioGroup>
        <Stack direction={["column", "row"]} gap={2} onClick={onSizeSelect}>
          <Radio value="32" size={size}>
            32
          </Radio>
          <Radio value="64" size={size}>
            64
          </Radio>
          <Radio value="128" size={size}>
            128
          </Radio>
          <Radio value="256" size={size}>
            256
          </Radio>
          <Radio value="512" size={size}>
            512
          </Radio>
        </Stack>
      </RadioGroup>
    </Stack>
  );
};

export default Size;
