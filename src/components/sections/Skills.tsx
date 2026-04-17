import { Heading } from "../ui/Heading";
import type { Tech } from "../../types/Tech/Tech";
import { Section } from "../ui/Section";
import {
  BranchesOutlined,
  ApartmentOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import GlassContainer from "../ui/GlassContainer";
import { motion } from "framer-motion";
import {
  defaultTransition,
  fadeIn,
  getStaggerDelay,
  viewportOnce,
} from "../../lib/motion/variants";
import { DecorativeSquares } from "../ui/Background/DecorativeSquares";
interface TechStack {
  programmingLangs: Tech[];
  frameworks: Tech[];
  tools: Tech[];
}

interface Techs {
  techs: Tech[];
  label: string;
  icon: React.ReactNode;
}

const techStack: TechStack = {
  programmingLangs: [
    { name: "HTML5", icon: "/html.svg" },
    { name: "CSS3", icon: "/css.svg" },
    { name: "JavaScript", icon: "/javascript.svg" },
    { name: "TypeScript", icon: "/typescript.svg" },
    { name: "NodeJS", icon: "/nodejs.svg" },
  ],
  frameworks: [
    { name: "React", icon: "/react.svg" },
    { name: "Express", icon: "/express.svg" },
    { name: "TailwindCSS", icon: "/tailwind.svg" },
    { name: "Bootstrap", icon: "/bootstrap.svg" },
    { name: "Sass", icon: "/sass.svg" },
  ],
  tools: [
    { name: "Git", icon: "/git.svg" },
    { name: "GitHub", icon: "/github.svg" },
    { name: "vite", icon: "/vite.svg" },
    { name: "Figma", icon: "figma.svg" },
  ],
};

const TechSkill = ({ techs, label, icon }: Techs) => {
  return (
    <motion.div
      variants={fadeIn}
      initial={"hidden"}
      whileInView={"visible"}
      transition={defaultTransition}
      viewport={viewportOnce}
      className="mb-6 md:mb-8 last:mb-0"
    >
      <GlassContainer variant="plain" className="p-5 md:p-6">
        <article className="flex flex-col gap-6">
          {/* Header con icona e titolo */}
          <div className="flex items-center gap-3 pb-4 border-b border-white/20">
            <span className="text-theme-aqua-500 text-2xl md:text-3xl">
              {icon}
            </span>
            <Heading
              fontFamily="fontP"
              level="custom"
              color="white"
              weight="normal"
              tone="muted"
              uppercase={false}
              className="text-xl"
            >
              {label}
            </Heading>
          </div>

          {/* Griglia tech */}
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {techs.map((tech, index) => (
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  ...defaultTransition,
                  delay: getStaggerDelay(index),
                }}
                viewport={viewportOnce}
                key={index}
                className="group flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(78,205,196,0.3)]"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/10 rounded-lg group-hover:bg-theme-aqua-500/20 transition-colors">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain brightness-110 drop-shadow-[0_0_8px_rgba(78,205,196,0.4)]"
                  />
                </div>
                <span className="text-white/90 text-xs md:text-sm font-p-1 font-normal text-center group-hover:text-theme-aqua-400 transition-colors">
                  {tech.name}
                </span>
              </motion.li>
            ))}
          </ul>
        </article>
      </GlassContainer>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <Section extraClasses="relative overflow-x-hidden">
      <DecorativeSquares
        position="-right-32 top-1/2 -translate-y-1/2"
        className="w-[32rem] rotate-90"
        opacity={0.2}
      />

      <motion.div
        variants={fadeIn}
        initial={"hidden"}
        whileInView={"visible"}
        transition={defaultTransition}
        viewport={viewportOnce}
        className="mb-8 md:mb-10 text-center"
      >
        <Heading
          fontFamily="fontP"
          color="white"
          weight="normal"
          tone="muted"
          uppercase={false}
          className="text-2xl"
        >
          Technical Skills
        </Heading>
      </motion.div>
      <TechSkill
        key={"pl"}
        icon={<ToolOutlined />}
        label="Programming Languages"
        techs={techStack.programmingLangs}
      />
      <TechSkill
        key={"frameworks"}
        icon={<ApartmentOutlined />}
        label="Frameworks"
        techs={techStack.frameworks}
      />
      <TechSkill
        key={"tools"}
        icon={<BranchesOutlined />}
        label="Tools"
        techs={techStack.tools}
      />
    </Section>
  );
};
