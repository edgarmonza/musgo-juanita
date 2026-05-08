# Musgo — Juanita López Peláez

Sitio web personal de Juanita López Peláez bajo la marca **Musgo**.
Transiciones regenerativas para organizaciones, equipos y personas.

- **Producción**: https://musgo.space
- **Stack**: Vite + React + TypeScript + Tailwind + shadcn/ui + Framer Motion
- **Deploy**: Vercel (auto-deploy desde `main`)

## Desarrollo local

```sh
npm install
npm run dev          # http://localhost:8080
npm run build        # producción → dist/
npm run preview      # preview de la build
npm test             # vitest
```

## Imágenes

Las imágenes se sirven desde `public/img/<slug>/<width>.{webp,jpg}` con tres
variantes responsive (640w / 1024w / 1920w) más un fallback JPG.

Para procesar imágenes nuevas (requiere `cwebp` + ImageMagick instalados):

```sh
bash scripts/optimize-images.sh
```

El componente `<ResponsiveImage slug="..." />` se encarga de servir la variante
adecuada según el viewport.

## Deploy

Cada push a `main` dispara un deploy automático en Vercel.
Para forzar un deploy manual:

```sh
vercel --prod
```
