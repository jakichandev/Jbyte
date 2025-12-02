import { Heading } from "../ui/Heading";
import { projects } from "../../data/projects";
import { ProjectCard } from "../cards/Card";
import { Section } from "../ui/Section";
import lines from "../../assets/svg/lines.svg";
import { BluredSeparator } from "../ui/Items/separators";
import { motion } from "motion/react";
import { fadeIn } from "../../lib/motion/variants";

export const Projects = () => {
  return (
    <Section extraClasses="relative mb-12 md:mb-0 overflow-hidden">
      <BluredSeparator position="top" height="md" />
      <img
        loading="lazy"
        src={lines}
        alt="Decorative lines"
        className="absolute inset-0 -z-10 w-80 h-full opacity-10"
      />
      <img
        loading="lazy"
        src={lines}
        alt="Decorative lines"
        className="absolute top-0 left-100 -z-10 w-80 h-full opacity-10 rotate-90"
      />
      <img
        loading="lazy"
        src={lines}
        alt="Decorative lines"
        className="absolute top-0 right-0 -z-10 w-80 h-full opacity-10"
      />
      <img
        loading="lazy"
        src={lines}
        alt="Decorative lines"
        className="absolute bottom-0 right-100 -z-10 w-80 h-full opacity-10 rotate-90"
      />
      <img
        loading="lazy"
        src={lines}
        alt="Decorative lines"
        className="absolute bottom-0 right-[calc(50%-(320px/2))] -z-10 w-80 h-full opacity-10"
      />

      <motion.div
        variants={fadeIn}
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Heading level="primary">My Projects</Heading>

        <p className="text-txt font-p-1 gap-2 mt-4 font-medium flex items-center justify-center text-sm md:text-normal">
          <span>
            <a href="/">
              <img className="w-7" src="/github.svg"></img>
            </a>
          </span>
          <span>Click the icon to see my GitHub profile</span>
        </p>
      </motion.div>
      <div className="grid grid-cols-3 md:grid-cols-4 my-18 gap-x-4 gap-y-2 mx-auto justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={project["label"]}
            variants={fadeIn}
            initial={"hidden"}
            whileInView={"visible"}
            transition={{ duration: 0.6, delay: index * 0.4 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              key={project["label"]}
              mode="compact"
              label={project["label"]}
              body={project["body"]}
              image={project["image"]}
              stack={project["stack"]}
              links={project["links"]}
            />
          </motion.div>
        ))}
      </div>
      <BluredSeparator position="bottom" height="md" />
    </Section>
  );
};
