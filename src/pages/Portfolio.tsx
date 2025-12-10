import Navbar from "../components/layout/Navbar";
import { Heading } from "../components/ui/Heading";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/cards/Card";
import { Section } from "../components/ui/Section";
import Footer from "../components/layout/Footer";
import { ScrollRestoration } from "react-router-dom";

export const Portfolio = () => {
  return (
    <>
      <ScrollRestoration />
      <Navbar navState="sm" />
      <Section paddingY="large">
        <Heading>portfolio</Heading>
        <main className="grid grid-cols-1 md:grid-cols-2 xmd:grid-cols-3 grid-rows-[repeat(minmax(100px, 1fr), auto)] gap-4 my-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.label}
              mode="expanded"
              label={project["label"]}
              body={project["body"]}
              image={project["image"]}
              stack={project["stack"]}
              links={project["links"]}
            />
          ))}
        </main>
      </Section>
      <Footer />
    </>
  );
};
