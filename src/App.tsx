import { useState } from "react";
import SvgData from "./components/SvgData";
import { Box, HStack, Text, Input, Grid } from "@chakra-ui/react";
import Swatches from "./components/Swatches";

function App() {
  const [color, setColor] = useState("#FFFFFF");

  const onColorChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  return (
    <>
      <SvgData color={color} width={512} height={512}></SvgData>
      <Swatches />
      <Input
        width={"400px"}
        height={"100px"}
        border={"none"}
        padding={0}
        type="color"
        value={color}
        onChange={onColorChangeHandler}
      ></Input>
    </>
  );
}

export default App;
