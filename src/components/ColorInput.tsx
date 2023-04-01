import { Input } from "@chakra-ui/react";

interface Props {
  color: string;
  onColorChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ColorInput = ({ color, onColorChangeHandler }: Props) => {
  return (
    <Input
      width={"64px"}
      height={"32px"}
      border={"none"}
      padding={0}
      type="color"
      value={color}
      onChange={onColorChangeHandler}
    ></Input>
  );
};

export default ColorInput;
