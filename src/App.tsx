import { useState, useEffect, useRef, RefObject } from "react";
import SvgData from "./components/SvgData";
import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import Swatches from "./components/Swatches";
import ColorInput from "./components/ColorInput";
import Size from "./components/Size";
import colorPalette from "./services/color-palette";
import HeroHeadline from "./components/HeroHeadline";
import NavBar from "./components/NavBar";
import defaultSvg from "./services/default-svg";
import SvgInput from "./components/SvgInput";
import ModalBox from "./components/ModalBox";
import Footer from "./components/Footer";
import { debounce } from "lodash";

function App() {
  const [color, setColor] = useState("#FAC8D8");
  const [size, setSize] = useState(256);
  const [activeColor, setActiveColor] = useState("");
  const [svgData, setSvgData] = useState(defaultSvg);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (svgRef.current) {
      const svgCode = svgRef.current.innerHTML;
      setSvgData(svgCode);
    }
  }, [svgRef, setSvgData, size, svgData, color]);

  // on input change
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSvgData(e.target.value);
  };

  // debounce effect for performance optimization
  const debouncedColorChangeHandler = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    },
    100,
    { leading: true, trailing: false }
  );

  const onColorChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedColorChangeHandler(e);
  };

  // on size change
  const onSizeSelectHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as HTMLInputElement;
    const value = Number(target.value);
    if (!isNaN(value)) {
      setSize(value);
    }
  };

  // on color palette change
  const onColorPaletteClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    color: string
  ) => {
    setColor(color);
    setActiveColor(color);
  };
  return (
    <VStack className="container" bgGradient="linear(to-t,  white, blue.50,)">
      <NavBar />
      <Container maxW="1200px">
        <Box alignItems={"center"} my={8}>
          <HeroHeadline />
          <Box mx={"auto"} my={8}>
            <Flex
              maxW={"512px"}
              height={"512px"}
              justifyContent={"center"}
              alignItems={"center"}
              margin={"auto"}
            >
              <SvgData
                color={color}
                width={size}
                height={size}
                svgCode={svgData}
                svgRef={svgRef}
              />
            </Flex>
          </Box>
          <Flex
            w={{
              base: "80vw",
              md: "md",
              lg: "md",
            }}
            gap={5}
            flexDirection={"column"}
            margin={"auto"}
          >
            <SvgInput svgData={svgData} onChange={onInputChange} />
            <Size onSizeSelect={onSizeSelectHandler} />
            <Swatches
              activeColor={activeColor}
              colorPalette={colorPalette}
              onColorPaletteClick={onColorPaletteClick}
            />
            <ColorInput
              color={color}
              onColorChangeHandler={onColorChangeHandler}
            />
            <ModalBox svgCode={svgRef?.current?.innerHTML} />
          </Flex>
        </Box>
      </Container>
      <Footer></Footer>
    </VStack>
  );
}

export default App;
