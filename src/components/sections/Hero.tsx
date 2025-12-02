import GlassContainer from "../ui/GlassContainer";
import { Heading } from "../ui/Heading";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { Section } from "../ui/Section";
import { RocketFilled } from "@ant-design/icons";
import { BackgroundItem1 } from "../ui/Background/Items";
import { BluredSeparator } from "../ui/Items/separators";
import { motion } from "framer-motion";
import { imageFadeIn } from "../../lib/motion/variants";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Section paddingY="custom" extraClasses="pt-4 pb-22 md:py-22 relative">
      <BluredSeparator position="top" height="lg" />

      <BackgroundItem1 />

      <motion.div
        variants={imageFadeIn}
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 2 }}
      >
        <GlassContainer
          backdropBlur={false}
          opacity="60"
          variant="image"
          className="relative flex flex-col items-center justify-end min-h-[70vh]"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            src="./hero.png"
            alt="Jacopo"
            className="absolute top-0 left-0 bottom-20 w-full h-full object-cover object-bottom pointer-events-none select-none"
          />
          <div className="mb-8 text-theme-aqua-400 mx-2.5 text-center flex flex-col items-center justify-end relative z-20">
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center leading-tight"
            >
              <Heading
                level="custom"
                className="text-5xl md:text-6xl lg:text-7xl font-thin"
              >
                i'm jacopo
              </Heading>
              <Heading
                level="custom"
                className="text-6xl md:text-7xl lg:text-8xl font-medium"
              >
                Frontend
              </Heading>
              <Heading
                level="custom"
                className="text-6xl md:text-7xl lg:text-8xl font-medium"
              >
                Developer
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
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
