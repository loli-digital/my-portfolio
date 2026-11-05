import "./ProjectSection.scss";
import { ProjectCard } from "@/components";

export function ProjectSection() {
  return (
    <section id="projects" className="projects">
        <h2 className="projects__title">Proyectos destacados</h2>
        <p className="projects__description">Soluciones reales construidas con arquitectura de componentes reutilizables, código mantenible y adaptabilidad responsive rigurosa</p>

        <div className="projects__cards">
          <ProjectCard />
        </div>
    </section>
  );
}
