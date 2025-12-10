import { Link } from "react-router-dom";
import { Heading } from "../ui/Heading";
import GlassContainer from "../ui/GlassContainer";
import type { ProjectCardProps } from "../../types/Project/Project";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface CardProps extends React.PropsWithChildren {
  hover?: boolean;
}

const hoverEffect =
  "hover:-translate-y-5 hover:transition-transform hover:duration-300";

export const Card = ({ children, hover }: CardProps) => {
  return (
    <GlassContainer
      opacity="80"
      className={`relative text-center h-full ease-out ${
        hover ? hoverEffect : ""
      }`}
    >
      {children}
    </GlassContainer>
  );
};

export const ProjectCard = ({
  label,
  image,
  body,
  stack,
  mode = "expanded",
}: ProjectCardProps) => {
  if (mode === "compact") {
    return (
      <Card hover>
        <Link to={`/portfolio/${label}`}>
          <div className="flex flex-col h-full gap-8 items-center justify-center">
            <LazyLoadImage
              src={image !== "" ? `/${image}` : "/coming_soon.jpg"}
              alt={`${label} Screenshot`}
              className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover object-center -z-1 mix-blend-saturation opacity-30 backdrop-blur-md"
              placeholder={
                <div className="placeholder-image w-full h-full flex items-center justify-center">
                  ...
                </div>
              }
            />
            <Heading
              level="custom"
              color="sunsetEnd"
              weight="normal"
              className="text-center text-xl md:text-2xl leading-7"
            >
              {label}
            </Heading>
            <div className="flex justify-center items-center gap-1.5 flex-wrap mt-auto p-3 ring-1 ring-theme-aqua-400/30 rounded-2xl bg-theme-aqua-500/20">
              {stack.map((tech) => (
                <LazyLoadImage
                  key={tech.name}
                  className="w-4 md:w-6"
                  src={`/${tech.icon}`}
                  alt={`${tech.name} Icon`}
                />
              ))}
            </div>
          </div>
        </Link>
      </Card>
    );
  }

  return (
    <Card hover>
      <Link to={`/portfolio/${label}`} className="flex flex-col h-full">
        <Heading
          level="tertiary"
          color="sunsetEnd"
          weight="bold"
          className="text-center mb-2"
        >
          {label}
        </Heading>
        <LazyLoadImage
          src={image !== "" ? `/${image}` : "/coming_soon.jpg"}
          alt={`${label} Screenshot`}
          className="rounded-lg border-2 border-theme-aqua-900/30 w-full h-[16rem] md:h-[16rem] object-cover object-center"
          placeholder={
            <div className="placeholder-image w-full h-full flex items-center justify-center">
              ...
            </div>
          }
        />
        <p className="text-theme-aqua-100 font-p-1 text-sm my-4 text-left">
          {body}
        </p>
        <div className="flex items-center gap-2 mt-auto">
          {stack.map((tech) => (
            <img
              key={tech.name}
              className="w-6"
              src={`/${tech.icon}`}
              alt={`${tech.name} Icon`}
            />
          ))}
        </div>
      </Link>
    </Card>
  );
};
