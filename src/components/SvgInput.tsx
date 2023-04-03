import { Box, Text, Input } from "@chakra-ui/react";

interface Props {
  svgData: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SvgInput = ({ svgData, onChange }: Props) => {
  return (
    <Box>
      <Text
        textAlign={"left"}
        fontSize={"xl"}
        fontWeight={"bold"}
        textColor={"blue.300"}
        pb={3}
      >
        Paste your SVG code here:
      </Text>
      <Input type="text" value={svgData} onChange={onChange} />
    </Box>
  );
};

export default SvgInput;
