import { Box, HStack, Input, Text } from "@chakra-ui/react";

interface Props {
  color: string;
  onColorChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ColorInput = ({ color, onColorChangeHandler }: Props) => {
  return (
    <div>
      <Text fontSize={"2xl"} pb={3}>
        Change color:
      </Text>
      <Input
        width={"full"}
        height={12}
        border={`1px solid ${color}`}
        padding={1}
        type="color"
        value={color}
        onChange={onColorChangeHandler}
      />
    </div>
  );
};

export default ColorInput;
