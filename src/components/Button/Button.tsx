import { DownloadIcon } from "../../icons";
import "./Button.scss";

export function Button() {
  return (
    <div className="button__cv-wrapper">
      <a
        href={`${import.meta.env.BASE_URL}cv/CV_Loli_Guerrero_Frontend_Developer_Junior.pdf`}
        download
        aria-label="Descargar currículum vitae en formato PDF"
        className="button__cv button__cv--mobile"
      >
        <DownloadIcon aria-hidden="true"/>
        Descargar CV
      </a>
    </div>
  );
}