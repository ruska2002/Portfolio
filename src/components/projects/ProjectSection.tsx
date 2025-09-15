import Project from "./Project";
import { projects } from "./ProjectsData";

const ProjectSection = () => {
  return (
    <div>
      {projects.map((p, i) => (
        <Project
          key={i}
          title={p.title}
          subtitle={p.subtitle}
          description={p.description}
          image={p.image}
          reversed={i % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default ProjectSection;
