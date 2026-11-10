import { type SvgIconComponent } from "@mui/icons-material";
import {
  OpenInNewIcon,
  GitHubIcon,
} from "@/icons";

export type Project = {
  id: number;
  imgAVIF: string;
  imgWEBP: string;
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  iconDemo: SvgIconComponent;
  demo: string;
  iconCode: SvgIconComponent;
  github: string;
};

export const projects: Project[] = [
  {
    id: 1,
    imgAVIF: new URL(
      "@/assets/images/adopta-un-junior.avif",
      import.meta.url,
    ).href,
    imgWEBP: new URL(
      "@/assets/images/adopta-un-junior.webp",
      import.meta.url,
    ).href,
    img: new URL(
      "@/assets/images/adopta-un-junior.png",
      import.meta.url,
    ).href,
    alt: "Ilustración de comunidad y colaboración digital",
    title: "Adopta un Junior",
    subtitle: "Plataforma colaborativa",
    description: "Plataforma colaborativa orientada a mejorar la experiencia de los nueva/os desarrolladora/es dentro de la comunidad Adopta un Junior. Diseñada con enfoque mobile-first, creación de componentes reutilizables en React, arquitectura modular y maquetación con Tailwind CSS",
    tech: ["React", "TypeScript", "Tailwind", "CSS"],
    iconDemo: OpenInNewIcon,
    demo: "https://adoptaunjunior.es/",
    iconCode: GitHubIcon,
    github: "https://github.com/AdoptaUnJuniorPlatform",
  },
  {
    id: 2,
    imgAVIF: new URL(
      "@/assets/images/clinica-dental-navarro.avif",
      import.meta.url,
    ).href,
    imgWEBP: new URL(
      "@/assets/images/clinica-dental-navarro.webp",
      import.meta.url,
    ).href,
    img: new URL(
      "@/assets/images/clinica-dental-navarro.png",
      import.meta.url,
    ).href,
    alt: "Página principal de una clínica dental",
    title: "Clínica dental Navarro",
    subtitle: "Healthcare Booking",
    description:
      "Aplicación web para la gestión y reserva de citas odontológicas. Desarrollada con React y Firebase, incorpora dashboard privado, calendario interactivo, selección de especialistas, validación de formularios y diseño responsive orientado a la experiencia de usuario/a",
    tech: ["React", "JavaScript", "Tailwind", "Swiper", "Datepicker"],
    iconDemo: OpenInNewIcon, 
    demo: "https://calendario-dentista-react.pages.dev/",
    iconCode: GitHubIcon,
    github: "https://github.com/loli-digital/calendario-dentista-react",
  },
  {
    id: 3,
    imgAVIF: new URL(
      "@/assets/images/assassins-creed-project.avif",
      import.meta.url,
    ).href,
    imgWEBP: new URL(
      "@/assets/images/assassins-creed-project.webp",
      import.meta.url,
    ).href,
    img: new URL(
      "@/assets/images/assassins-creed-project.png",
      import.meta.url,
    ).href,
    alt: "Página web de Assassin's Creed Mirage",
    title: "Assassin's Creed Project",
    subtitle: "Gaming Web",
    description: "Recreación visual de la página oficial de Assassin's Creed, centrada en la maquetación fiel a su estética. Incluye diseño responsive,  adaptación de secciones promocionales con HTML, CSS y JavaScript mínimo para lograr una experiencia estática pulida y coherente con la identidad de la saga",
    tech: ["HTML", "JavaScript", "Tailwind", "CSS"],
    iconDemo: OpenInNewIcon,
    demo: "https://loli-digital.github.io/assassins-creed-project/",
    iconCode: GitHubIcon,
    github: "https://github.com/loli-digital/assassins-creed-project",
  },
  {
    id: 4,
    imgAVIF: new URL(
      "@/assets/images/mini-proyectos.avif",
      import.meta.url,
    ).href,
    imgWEBP: new URL(
      "@/assets/images/mini-proyectos.webp",
      import.meta.url,
    ).href,
    img: new URL(
      "@/assets/images/mini-proyectos.png",
      import.meta.url,
    ).href,
    alt: "Sección con tarjetas de mini proyectos",
    title: "Mini Proyectos",
    subtitle: "Frontend Projects",
    description:
      "Colección de proyectos y micro-herramientas: widget del tiempo en tiempo real consumiendo API REST, conversor de temperatura, widget para mostrar repositorios de GitHub aleatorios consumiendo API REST y recreación de los cromos de las ranas de chocolate que aparecen en la saga de Harry Potter",
    tech: ["HTML", "JavaScript", "CSS", "API"],
    iconDemo: OpenInNewIcon,
    demo: "https://loli-digital.github.io/mini-proyectos/",
    iconCode: GitHubIcon,
    github: "https://github.com/loli-digital/mini-proyectos",
  },
];