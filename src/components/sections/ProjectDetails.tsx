import {
  useNavigate,
  useParams,
  type NavigateOptions,
  type To,
} from "react-router-dom";
import { projects } from "../../data/projects";
import { useEffect, useState } from "react";
import { Heading } from "../ui/Heading";
import Button from "../ui/Button";
import GlassContainer from "../ui/GlassContainer";
import { LeftCircleOutlined } from "@ant-design/icons";
import Navbar from "../layout/Navbar";

interface Animations {
  in?: string;
  out?: string;
}

const animations: Animations = {
  in: "animate-open",
  out: "opacity-0 scale-85",
};

export const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((proj) => proj.slug === slug);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [animation, setAnimation] = useState<string | undefined>(animations.in);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setAnimation(isOpen ? animations.in : animations.out);
    }, 300);
  }, [isOpen]);

  const closeModal = (dest: To | number, options?: NavigateOptions) => {
    function navigateByCondition() {
      if (typeof dest === "number") navigate(dest);
      else navigate(dest, options);
    }
    return new Promise((resolve) => {
      resolve(
        setTimeout(() => {
          navigateByCondition();
        }, 500)
      );
    });
  };

  return (
    <>
      <Navbar />
      {/* Overlay */}
      <div
        onClick={async () => {
          setIsOpen(false);
          await closeModal("/portfolio");
        }}
        className="overlay fixed top-0 left-0 z-40 w-full h-full bg-theme-gray-950/95 backdrop-blur-sm overflow-y-hidden cursor-pointer"
        aria-label="Chiudi modal"
      >
        {/* Modal */}
        <GlassContainer
          variant="highlight"
          className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] md:w-[80vw] lg:w-[70vw] max-h-[90vh] overflow-y-auto z-100 p-6 transition-all duration-300 ${animation}`}
        >
          <div className="flex flex-col gap-6">
            {/* Header con titolo e pulsanti */}
            <div className="flex flex-row gap-3 md:gap-2 w-full md:items-center justify-between">
              <Heading
                level="secondary"
                fontFamily="fontP"
                color="white"
                weight="normal"
                uppercase={false}
                className="text-2xl"
              >
                {project ? project.label : "Project not found"}
              </Heading>
              <div className="flex gap-2 md:ml-auto">
                <Button
                  className="text-theme-aqua-100 text-2xl cursor-pointer"
                  onClick={async () => {
                    setIsOpen(false);
                    await closeModal(-1);
                  }}
                >
                  <LeftCircleOutlined />
                </Button>
              </div>
            </div>

            {!project && (
              <div className="flex flex-col items-start gap-4">
                <p className="text-white/80 font-p-1 font-light text-base md:text-lg leading-relaxed text-left">
                  The project URL does not match any portfolio item. It may have
                  been moved, renamed or removed.
                </p>
                <Button
                  color="aqua"
                  level={2}
                  onClick={async () => {
                    setIsOpen(false);
                    await closeModal("/portfolio");
                  }}
                >
                  Back to portfolio
                </Button>
              </div>
            )}

            {project && (
              <>
                {/* Immagine progetto */}
                <div className="relative rounded-lg overflow-hidden border-2 border-white/20 group">
                  <img
                    className="h-[30vh] md:h-[40vh] w-full object-center object-cover transition-transform duration-300 group-hover:scale-105"
                    src={
                      project.image ? `/${project.image}` : "/coming_soon.jpg"
                    }
                    alt={`${project.label} Screenshot`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-theme-gray-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Descrizione */}
                <p className="text-white/90 font-p-1 font-light text-base md:text-lg leading-relaxed text-left">
                  {project.body}
                </p>

                {/* Footer: Stack e Links */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between md:items-center pt-4 border-t border-white/20">
                  {/* Stack tecnologico */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white/70 text-sm font-normal uppercase tracking-wider">
                      Technology Stack
                    </h3>
                    <ul className="flex gap-3 flex-wrap">
                      {project.stack.map((tech) => (
                        <li
                          key={tech.name}
                          className="group relative"
                          title={tech.name}
                        >
                          <img
                            className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110 brightness-110 drop-shadow-[0_0_8px_rgba(78,205,196,0.4)]"
                            src={`/${tech.icon}`}
                            alt={`${tech.name} icon`}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-theme-aqua-500 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(78,205,196,0.4)]"
                        aria-label="Vedi su GitHub"
                      >
                        <img
                          className="w-6 h-6 brightness-[1.4]"
                          src="/github.svg"
                          alt=""
                          aria-hidden="true"
                        />
                        <span className="text-white font-p-1 font-normal text-sm md:text-base hidden md:inline">
                          GitHub
                        </span>
                      </a>
                    )}
                    {project.links.online && (
                      <a
                        href={project.links.online}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-theme-aqua-500 hover:bg-theme-aqua-400 border-2 border-theme-aqua-500 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(78,205,196,0.6)]"
                        aria-label="Vedi demo live"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        <span className="text-white font-p-1 font-normal text-sm md:text-base">
                          Live Demo
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </GlassContainer>
      </div>
    </>
  );
};
