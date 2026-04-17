import { useMemo, useState } from "react";
import Navbar from "../components/layout/Navbar";
import { Heading } from "../components/ui/Heading";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/cards/Card";
import { Section } from "../components/ui/Section";
import Footer from "../components/layout/Footer";
import { ScrollRestoration } from "react-router-dom";

const ALL_PROJECTS_FILTER = "All";

interface ProjectFilterOption {
  label: string;
  count: number;
}

interface ProjectFiltersProps {
  activeFilter: string;
  filters: ProjectFilterOption[];
  onChange: (filter: string) => void;
}

const ProjectFilters = ({
  activeFilter,
  filters,
  onChange,
}: ProjectFiltersProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-5">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.label;

        return (
          <button
            key={filter.label}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(filter.label)}
            className={`rounded-lg border px-3 py-1.5 font-p-1 text-sm transition-all duration-200 ${
              isActive
                ? "border-theme-aqua-400 bg-theme-aqua-500/20 text-theme-aqua-300 shadow-[0_0_18px_rgba(34,221,202,0.18)]"
                : "border-white/10 bg-white/[0.03] text-white/70 hover:border-theme-aqua-300/40 hover:text-white"
            }`}
          >
            {filter.label}
            <span className="ml-1 text-white/45">({filter.count})</span>
          </button>
        );
      })}
    </div>
  );
};

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState(ALL_PROJECTS_FILTER);

  const projectFilters = useMemo(() => {
    const counts = projects.reduce<Record<string, number>>((acc, project) => {
      project.stack.forEach((tech) => {
        acc[tech.name] = (acc[tech.name] ?? 0) + 1;
      });

      return acc;
    }, {});

    return [
      { label: ALL_PROJECTS_FILTER, count: projects.length },
      ...Object.entries(counts).map(([label, count]) => ({ label, count })),
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === ALL_PROJECTS_FILTER) return projects;

    return projects.filter((project) =>
      project.stack.some((tech) => tech.name === activeFilter)
    );
  }, [activeFilter]);

  return (
    <>
      <ScrollRestoration />
      <Navbar navState="sm" />
      <Section paddingY="large">
        <Heading
          fontFamily="fontP"
          color="white"
          weight="normal"
          tone="muted"
          uppercase={false}
          className="text-2xl"
        >
          Portfolio
        </Heading>

        <ProjectFilters
          activeFilter={activeFilter}
          filters={projectFilters}
          onChange={setActiveFilter}
        />

        <main className="grid grid-cols-1 md:grid-cols-2 xmd:grid-cols-3 grid-rows-[repeat(minmax(100px, 1fr), auto)] gap-4 mt-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              mode="expanded"
              slug={project.slug}
              label={project.label}
              body={project.body}
              image={project.image}
              stack={project.stack}
              links={project.links}
              featured={project.featured}
            />
          ))}
        </main>

        {filteredProjects.length === 0 && (
          <p className="mt-8 text-center font-p-1 text-white/70">
            No projects found for this filter.
          </p>
        )}
      </Section>
      <Footer />
    </>
  );
};
