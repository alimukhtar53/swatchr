import { useEffect } from "react";
interface Props {
  color?: string;
  width?: number;
  height?: number;
  svgCode: string;
}
function SvgData({ color, width, height, svgCode }: Props) {
  useEffect(() => {
    console.log(color);
  }, []);
  const modifiedSvgCode = svgCode
    .replace(/fill=".*?"/g, `fill="${color}"`)
    .replace(/width=".*?"/g, `width="${width || "100%"}"`)
    .replace(/height=".*?"/g, `height="${height || "100%"}"`);
  return <div dangerouslySetInnerHTML={{ __html: modifiedSvgCode }} />;
}

export default SvgData;
