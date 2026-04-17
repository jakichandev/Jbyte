import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { profile } from "../../data/profile";
import {
  defaultTransition,
  fadeIn,
  viewportOnce,
} from "../../lib/motion/variants";
import Button from "../ui/Button";
import GlassContainer from "../ui/GlassContainer";
import { DecorativeSquares } from "../ui/Background/DecorativeSquares";
import { Heading } from "../ui/Heading";
import { Section } from "../ui/Section";

export const AboutPreview = () => {
  return (
    <Section extraClasses="relative overflow-hidden">
      <DecorativeSquares
        position="-right-28 top-1/2 -translate-y-1/2"
        className="w-[32rem] rotate-90 md:w-[36rem]"
        opacity={0.2}
      />

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={defaultTransition}
        viewport={viewportOnce}
      >
        <GlassContainer
          variant="soft"
          className="mx-auto max-w-5xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr] md:items-center md:gap-8">
            <img
              src={profile.avatar.image}
              alt={`${profile.name} ${profile.surname}`}
              className="mx-auto h-24 w-24 rounded-lg border border-white/15 object-cover object-center md:h-28 md:w-28"
            />

            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <Heading
                fontFamily="fontP"
                color="white"
                weight="normal"
                tone="muted"
                uppercase={false}
                className="text-xl md:text-2xl"
              >
                A frontend developer with a visual background
              </Heading>

              <p className="mt-4 max-w-3xl font-p-1 text-sm leading-relaxed text-white/75 md:text-base">
                I come from five years as a video technician and a graphic
                design background. Today I build responsive interfaces with
                React, TypeScript and modern UI tools, mixing practical
                development with attention to visual details.
              </p>

              <Link
                to="/profile"
                aria-label="Read more about Jacopo's profile"
                className="mt-6 inline-block"
              >
                <Button level={2} color="aqua" className="gap-2">
                  Read my profile
                  <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </div>
        </GlassContainer>
      </motion.div>
    </Section>
  );
};
