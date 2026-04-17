import GlassContainer from "../ui/GlassContainer";
import { Heading } from "../ui/Heading";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { Section } from "../ui/Section";
import { RocketFilled } from "@ant-design/icons";
import { BackgroundItem1 } from "../ui/Background/Items";
import { BluredSeparator } from "../ui/Items/separators";
import { motion } from "framer-motion";
import {
  defaultTransition,
  imageFadeIn,
  imageTransition,
} from "../../lib/motion/variants";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Section
      paddingY="custom"
      extraClasses="pt-4 pb-8 md:pt-5 md:pb-10 relative overflow-hidden"
    >
      <BluredSeparator position="top" height="lg" />

      <BackgroundItem1 />

      <motion.div
        variants={imageFadeIn}
        initial={"hidden"}
        animate={"visible"}
        transition={imageTransition}
        className="overflow-hidden"
      >
        <GlassContainer
          backdropBlur={false}
          variant="image"
          className="relative flex flex-col items-center justify-end min-h-[62vh]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={imageTransition}
            className="absolute top-0 left-0 bottom-20 w-full h-full object-cover object-bottom pointer-events-none select-none"
          >
            <LazyLoadImage
              src="/hero.png"
              alt="Hero Background"
              className="w-full h-full object-cover object-bottom"
              placeholder={
                <div className="placeholder-image w-full h-full">
                  loading...
                </div>
              }
            />
          </motion.div>
          <div className="mb-8 text-theme-aqua-400 mx-2.5 text-center flex flex-col items-center justify-end relative z-20">
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ ...defaultTransition, delay: 0.08 }}
              className="flex flex-col items-center leading-tight"
            >
              <Heading
                level="custom"
                className="text-5xl md:text-6xl lg:text-7xl font-light"
              >
                i'm jacopo
              </Heading>
              <Heading
                level="custom"
                className="text-6xl md:text-7xl lg:text-8xl font-normal"
              >
                Frontend
              </Heading>
              <Heading
                level="custom"
                className="text-6xl md:text-7xl lg:text-8xl font-normal"
              >
                Developer
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ ...defaultTransition, delay: 0.16 }}
              className="mt-8"
            >
              <Button
                onClick={() => navigate("/portfolio")}
                level={1}
                color="sunsetEnd"
                className="gap-1"
              >
                View my projects
                <RocketFilled rotate={45} className="text-2xl ml-2" />
              </Button>
            </motion.div>
          </div>
        </GlassContainer>
      </motion.div>

      <BluredSeparator position="bottom" />
    </Section>
  );
};

export default Hero;
