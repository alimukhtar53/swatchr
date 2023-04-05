import { MutableRefObject } from "react";

interface Props {
  color?: string;
  width?: number;
  height?: number;
  svgCode: string;
  svgRef: MutableRefObject<SVGSVGElement | null>;
}
function SvgData({ color, width, height, svgCode, svgRef }: Props) {
  const modifiedSvgCode = svgCode
    .replace(/fill=".*?"/g, `fill="${color}"`)
    .replace(/width=".*?"/g, `width="${width || "256px"}"`)
    .replace(/height=".*?"/g, `height="${height || "256px"}"`);
  return (
    <div
      id="this one wants to pick"
      ref={svgRef as React.RefObject<HTMLDivElement>}
      dangerouslySetInnerHTML={{ __html: modifiedSvgCode }}
    />
  );
}

export default SvgData;
