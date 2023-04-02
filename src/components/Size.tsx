import { Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

interface Props {
  onSizeSelect: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Size = ({ onSizeSelect }: Props) => {
  const size = "lg";
  return (
    <div>
      <Text
        textAlign={"left"}
        fontSize={"xl"}
        pb={3}
        fontWeight={"bold"}
        textColor={"gray.700"}
      >
        Size:
      </Text>
      <RadioGroup>
        <Stack direction="row" gap={2} onClick={onSizeSelect}>
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
    </div>
  );
};

export default Size;
