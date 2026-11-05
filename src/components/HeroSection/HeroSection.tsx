import "./HeroSection.scss";
import { Button } from "@/components";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1 className="hero__title">Loli <span className="hero__title--decoration">G.F.</span></h1>
        <p className="hero__role">Frontend Developer</p>
        <p className="hero__description">
          Construyo interfaces web modernas, accesibles y de alto rendimiento
          utilizando <span className="hero__description--tech">React</span>,{" "}
          <span className="hero__description--tech">JavaScript</span> y{" "}
          <span className="hero__description--tech">Tailwind</span>
        </p>
        <p className="hero__description">
          Apasionada por la arquitectura de componentes limpios y la experiencia
          de usuario cuidada al detalle
        </p>
        <Button />
      </div>

      {/* Avatar */}
      <div className="hero__wrapper">
        <picture className="hero__image--bg">
          <img
            loading="lazy"
            src={`${import.meta.env.BASE_URL}svg-blob-cyan.svg`}
            alt="Blob de color cyan"
          />
        </picture>
        <picture className="hero__image">
          <img
            loading="lazy"
            src={`${import.meta.env.BASE_URL}loli-guerrero-avatar.png`}
            alt="Avatar de mujer con gafas y jersey negro"
          />
        </picture>
      </div>
    </section>
  );
}
