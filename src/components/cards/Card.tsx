import { Link } from "react-router-dom";
import { Heading } from "../ui/Heading";
import GlassContainer from "../ui/GlassContainer";
import type { ProjectCardProps } from "../../types/Project/Project";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Card = ({ children }: React.PropsWithChildren) => {
  return (
    <GlassContainer opacity="80" className="relative text-center p-1 h-full">
      <div className="relative z-20 h-full">{children}</div>
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
      <Card>
        <Link
          to={`/portfolio/${label}`}
          className="flex flex-col items-center gap-2"
        >
          <Heading
            level="custom"
            color="sunsetEnd"
            weight="normal"
            className="text-center text-xl md:text-2xl"
          >
            {label}
          </Heading>
          <div className="flex justify-center items-center gap-1.5 flex-wrap">
            {stack.map((tech) => (
              <LazyLoadImage
                key={tech.name}
                className="w-4 md:w-6"
                src={`/${tech.icon}`}
                alt={`${tech.name} Icon`}
              />
            ))}
          </div>
        </Link>
      </Card>
    );
  }

  return (
    <Card>
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
