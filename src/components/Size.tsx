import { Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

interface Props {
  onSizeSelect: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Size = ({ onSizeSelect }: Props) => {
  return (
    <Box width={"full"}>
      <Text textAlign={"left"} fontSize={"2xl"} pb={3}>
        Size:
      </Text>
      <RadioGroup>
        <Stack direction="row" gap={2} onClick={onSizeSelect}>
          <Radio value="32" size={"lg"}>
            32
          </Radio>
          <Radio value="64" size={"lg"}>
            64
          </Radio>
          <Radio value="512" size={"lg"}>
            512
          </Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default Size;
