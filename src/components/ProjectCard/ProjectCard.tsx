import { projects } from "@/data";
import "./ProjectCard.scss";

export function ProjectCard() {
  return (
    <article className="project-card">
      {projects.map((project) => {
        const IconDemo = project.iconDemo;
        const IconCode = project.iconCode;

        return (
          <div key={project.id} className="project-card__wrapper">
            <picture className="project-card__picture">
              <source srcSet={project.imgAVIF} type="image/avif" />
              <source srcSet={project.imgWEBP} type="image/webp" />
              <img loading="lazy" src={project.img} alt={project.alt} />
            </picture>
            <div className="project-card__text-wrapper">
              <h4 className="project-card__subtitle">{project.subtitle}</h4>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__tech-wrapper">
                {project.tech.map((tech) => (
                  <span className="project-card__tech" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-card__button">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__button project-card__button--demo"
                >
                  <IconDemo />
                  Ver demo
                  <span className="sr-only">(se abre en una nueva pestaña)</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__button project-card__button--code"
                >
                  <IconCode />
                  Código
                  <span className="sr-only">(se abre en una nueva pestaña)</span>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </article>
  );
}
