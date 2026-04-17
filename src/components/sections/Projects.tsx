import { Heading } from "../ui/Heading";
import { projects } from "../../data/projects";
import { ProjectCard } from "../cards/Card";
import { Section } from "../ui/Section";
import Button from "../ui/Button";
import { BluredSeparator } from "../ui/Items/separators";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  defaultTransition,
  fadeIn,
  getStaggerDelay,
  viewportOnce,
} from "../../lib/motion/variants";
import { DecorativeSquares } from "../ui/Background/DecorativeSquares";

export const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <Section extraClasses="relative overflow-hidden">
      <BluredSeparator position="top" height="md" />
      <DecorativeSquares
        position="-left-28 bottom-0"
        className="w-[34rem] scale-x-[-1]"
        opacity={0.25}
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
          weight="normal"
          uppercase={false}
          className="text-xl md:text-2xl"
        >
          My Projects
        </Heading>

        <p className="text-txt font-p-1 gap-2 mt-4 font-light flex items-center justify-center text-sm md:text-normal">
          <span>
            <a
              href="https://github.com/jakichandev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Jacopo's GitHub profile"
            >
              <img className="w-7" src="/github.svg" alt="" />
            </a>
          </span>
          <span>Click the icon to see my GitHub profile</span>
        </p>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-8 md:mt-10 gap-4 mx-auto justify-center">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            variants={fadeIn}
            initial={"hidden"}
            whileInView={"visible"}
            transition={{
              ...defaultTransition,
              delay: getStaggerDelay(index),
            }}
            viewport={viewportOnce}
          >
            <ProjectCard
              key={project.slug}
              mode="compact"
              slug={project.slug}
              label={project.label}
              body={project.body}
              image={project.image}
              stack={project.stack}
              links={project.links}
              featured={project.featured}
            />
          </motion.div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link to="/portfolio" aria-label="View all portfolio projects">
          <Button level={2} color="sunsetEnd">
            View all projects
          </Button>
        </Link>
      </div>
      <BluredSeparator position="bottom" />
    </Section>
  );
};
