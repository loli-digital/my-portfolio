# Portfolio

⚠️ Este repositorio es de código abierto y puede utilizarse como base para crear un portfolio propio. Sin embargo, toda la información personal incluida (fotografía, currículum, biografía, datos de contacto y perfiles profesionales) debe ser sustituida por la del nuevo autor antes de su publicación.

Portfolio personal desarrollado con React + TypeScript + Sass para presentar mi perfil profesional, proyectos destacados, habilidades técnicas y contacto.

## Descripción

Este proyecto es una landing page moderna y responsive que sirve como carta de presentación para un desarrollador frontend junior. 

Incluye:

- Hero con presentación personal
- Sección de proyectos con enlaces a demos y repositorios
- Área de tecnologías, herramientas y soft skills
- Sección sobre mí
- Contacto con LinkedIn, GitHub y email

## Stack tecnológico

- React 19
- TypeScript
- Vite
- Sass
- Material UI Icons
- ESLint

## Capturas y estructura

```text
my-portfolio/
├── public/
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── cv/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── styles/
│   ├── App.tsx
│   ├── icons.ts
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── pnpm-lock.yaml
├── README.md
└── LICENSE
```

## Requisitos

- Node.js 18+
- pnpm

## Instalación

```bash
pnpm install
```

## Scripts disponibles

```bash
pnpm dev
```
Inicia el proyecto en modo desarrollo.

```bash
pnpm build
```
Genera la versión de producción.

```bash
pnpm preview
```
Previsualiza la build generada.

```bash
pnpm lint
```
Ejecuta ESLint para comprobar el código.

## Cómo personalizarlo

Puedes adaptar fácilmente la información del portfolio editando los archivos dentro de `src/data/`:

- `projectsData.ts` — proyectos mostrados
- `skillsData.ts` — tecnologías, herramientas y habilidades
- `contactData.ts` — redes sociales y contacto

También puedes cambiar textos, estilos y colores en `src/styles/` y en los componentes de `src/components/`.

## Uso del proyecto

Este repositorio puede utilizarse libremente como base para crear un portfolio propio, realizar prácticas o fines educativos.

Sin embargo, la fotografía, nombre, currículum, textos biográficos, datos de contacto, perfiles profesionales y cualquier otro contenido personal o identificativo incluido en este repositorio pertenecen exclusivamente a su autora y no están autorizados para su reutilización o redistribución.

Si utilizas este proyecto como base para crear tu propio portfolio, deberás sustituir toda la información personal por la tuya antes de publicarlo o desplegarlo.

La reutilización del código está permitida conforme a la licencia del proyecto.

## Licencia

El código fuente de este proyecto se distribuye bajo la licencia MIT.

⚠️ Importante: la licencia MIT aplica únicamente al código fuente.

Los contenidos personales incluidos en este repositorio, tales como fotografías, nombre, currículum, textos biográficos, datos de contacto, perfiles en redes profesionales y cualquier otro material identificativo, quedan expresamente excluidos de dicha licencia y no pueden reutilizarse, copiarse, modificarse ni redistribuirse sin autorización expresa de su autora.

Si utilizas este proyecto como base para tu propio portfolio, deberás sustituir toda la información personal por la tuya antes de publicarlo.

Consulta el archivo [LICENSE](./LICENSE) para obtener el texto completo de la licencia y las condiciones adicionales de uso.

## Créditos

Si utilizas este proyecto como base para crear tu propio portfolio, agradecería que incluyeras una referencia a este repositorio como fuente de inspiración o punto de partida.

Aunque no es obligatorio según la licencia MIT, el reconocimiento ayuda a apoyar el trabajo open source y facilita que otras personas encuentren el proyecto original.

## Contacto

Si quieres ponerte en contacto conmigo:

- Email: loli.guerrero.dev@gmail.com
- LinkedIn: https://www.linkedin.com/in/loli-guerrero/
- GitHub: https://github.com/loli-digital