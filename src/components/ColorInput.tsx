import React, { useCallback } from "react";
import { Input, Text } from "@chakra-ui/react";

interface Props {
  color: string;
  onColorChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ColorInput = ({ color, onColorChangeHandler }: Props) => {
  const memoizedHandler = useCallback(onColorChangeHandler, []);

  return (
    <div>
      <Text fontSize={"xl"} pb={3} fontWeight={"bold"} textColor={"gray.700"}>
        Change color:
      </Text>
      <Input
        width={"full"}
        height={12}
        border={`1px dashed ${color}`}
        padding={1}
        type="color"
        value={color}
        cursor={"pointer"}
        onChange={memoizedHandler}
      />
    </div>
  );
};

export default ColorInput;
