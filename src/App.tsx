import { useState } from "react";
import SvgData from "./components/SvgData";
import { Input } from "@chakra-ui/react";

function App() {
  const [color, setColor] = useState("000000");

  const onColorChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  return (
    <>
      <SvgData color={color} width={512} height={512}></SvgData>
    </>
  );
}

export default App;
