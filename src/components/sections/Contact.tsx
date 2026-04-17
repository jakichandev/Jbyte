import Button from "../ui/Button";
import GlassContainer from "../ui/GlassContainer";
import { Section } from "../ui/Section";
import { Link } from "react-router-dom";
import { MailOutlined, DownloadOutlined } from "@ant-design/icons";
import { Heading } from "../ui/Heading";
import { motion } from "motion/react";
import {
  defaultTransition,
  fadeIn,
  getStaggerDelay,
  viewportOnce,
} from "../../lib/motion/variants";
import { DecorativeSquares } from "../ui/Background/DecorativeSquares";

export const Contact = () => {
  return (
    <Section paddingY="default" extraClasses="relative overflow-hidden">
      <DecorativeSquares
        position="-left-28 bottom-0"
        className="w-[32rem] scale-x-[-1]"
        opacity={0.2}
      />

      <motion.div
        variants={fadeIn}
        initial={"hidden"}
        whileInView={"visible"}
        transition={defaultTransition}
        viewport={viewportOnce}
      >
        <Heading
          fontFamily="fontP"
          level="primary"
          color="white"
          weight="normal"
          tone="muted"
          uppercase={false}
          className="mb-8 md:mb-10 text-2xl"
        >
          Get in Touch
        </Heading>
      </motion.div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact */}
        <motion.div
          variants={fadeIn}
          initial={"hidden"}
          whileInView={"visible"}
          transition={{
            ...defaultTransition,
            delay: getStaggerDelay(1),
          }}
          viewport={viewportOnce}
        >
          <GlassContainer
            variant="highlight"
            className="p-6 md:p-8 h-full"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <p className="font-p-1 text-white/80 font-light">
                Do you have a project in mind or want to get in touch?
                <br />
                Write to me, I respond quickly.
              </p>
              <Link
                to="/contact"
                aria-label="Go to contact page"
                className="inline-block"
              >
                <Button as="span" color="aqua" level={2}>
                  Contact Me
                  <MailOutlined />
                </Button>
              </Link>
            </div>
          </GlassContainer>
        </motion.div>

        {/* Scarica CV */}
        <motion.div
          variants={fadeIn}
          initial={"hidden"}
          whileInView={"visible"}
          transition={{
            ...defaultTransition,
            delay: getStaggerDelay(2),
          }}
          viewport={viewportOnce}
        >
          <GlassContainer variant="highlight" className="p-6 md:p-8">
            <div className="flex flex-col items-center text-center gap-4">
              <p className="font-p-1 text-white/80 font-light">
                Do you want my updated CV?
                <br />
                Download it in PDF format.
              </p>
              <a
                href="/JacopoGianfaldoni.pdf"
                download
                aria-label="Download CV in PDF"
                className="inline-block"
                rel="noopener noreferrer"
              >
                <Button as="span" color="aqua" level={2}>
                  Download CV
                  <DownloadOutlined />
                </Button>
              </a>
              <span className="text-white/50 text-sm font-p-1">
                Format: PDF • Language: EN
              </span>
            </div>
          </GlassContainer>
        </motion.div>
      </div>
    </Section>
  );
};
