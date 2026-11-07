# Portfolio

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
└── README.md
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

Sin embargo, no está permitido reutilizar mis datos personales, imagen, nombre, currículum, proyectos, textos biográficos, enlaces de contacto o cualquier contenido que me identifique como autora del portfolio. Si utilizas este proyecto, deberás sustituir toda la información personal por la tuya propia antes de publicarlo.

La reutilización del código está permitida, pero la identidad y contenido personal mostrados en este portfolio pertenecen exclusivamente a su autora.

## Créditos

Si utilizas este proyecto como base para crear tu propio portfolio, se agradece mencionar este repositorio como fuente de inspiración o punto de partida, aunque no es obligatorio salvo que la licencia del proyecto indique lo contrario.

## Contacto

Si quieres ponerte en contacto conmigo:

- Email: loli.guerrero.dev@gmail.com
- LinkedIn: https://www.linkedin.com/in/loli-guerrero/
- GitHub: https://github.com/loli-digital

## Nota

Este proyecto está pensado como portfolio personal y puede reutilizarse como base para otros portafolios profesionales o de estudio.