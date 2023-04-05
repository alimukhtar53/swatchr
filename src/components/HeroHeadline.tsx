import { Heading } from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";

const HeroHeadline = () => {
  const [animatePizza, setAnimatePizza] = useState(false);

  useEffect(() => {
    // Trigger animation after page loads
    setAnimatePizza(false);

    // Delay animation by 3 seconds
    const timeout = setTimeout(() => {
      setAnimatePizza(true);
    }, 2000);

    // Clean up function to clear timeout on unmount
    return () => clearTimeout(timeout);
  }, []);

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [1, 0], [0.2, 1]);
  return (
    <Heading
      textAlign={"center"}
      as="h1"
      size="xl"
      fontWeight={"black"}
      textColor={"twitter.800"}
    >
      <motion.div style={{ scale }}>
        <Balancer>
          <motion.span
            style={{
              scaleY: scrollYProgress,
            }}
          >
            Bring some pizzazz{" "}
            <motion.div
              style={{ display: "inline-block" }}
              animate={animatePizza ? { x: 0, y: 0, rotate: 90 } : {}}
            >
              <motion.button
                style={{ display: "inline-block" }}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
              >
                🍕
              </motion.button>
            </motion.div>{" "}
            to your app with Swatchr's interactive SVG coloring
          </motion.span>
        </Balancer>
      </motion.div>
    </Heading>
  );
};

export default HeroHeadline;
