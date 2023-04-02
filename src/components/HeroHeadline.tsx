import { Heading } from "@chakra-ui/react";
import Balancer from "react-wrap-balancer";

const HeroHeadline = () => {
  return (
    <Heading textAlign={"center"} as="h1" size="xl" fontWeight={"black"}>
      <Balancer>
        Bring some pizzazz🍕 to your app with Swatchr's interactive SVG coloring
      </Balancer>
    </Heading>
  );
};

export default HeroHeadline;
