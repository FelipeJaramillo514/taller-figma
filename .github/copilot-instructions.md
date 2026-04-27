# Copilot Instructions - Taller Figma Next.js Project

Este es un proyecto Next.js con TypeScript, Tailwind CSS y ESLint preconfigurado.

## Stack Tecnológico

- **Next.js 16**: Framework React para aplicaciones web modernas
- **React 19**: Librería UI más reciente
- **TypeScript**: Tipado estático para mejor desarrollo
- **Tailwind CSS 4**: Framework de utilidades CSS
- **ESLint**: Análisis estático de código

## Requisitos

- Node.js 18+ instalado
- npm, yarn, pnpm o bun como gestor de paquetes

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El proyecto estará disponible en http://localhost:3000

Los cambios se reflejarán automáticamente (hot reload).

## Construcción

Para crear una compilación optimizada para producción:

```bash
npm run build
```

## Ejecución en Producción

Para ejecutar la compilación de producción:

```bash
npm start
```

## Lint

Para verificar el código con ESLint:

```bash
npm run lint
```

## Estructura del Proyecto

- `app/` - Rutas y componentes (App Router)
- `public/` - Archivos estáticos
- `next.config.ts` - Configuración de Next.js
- `tsconfig.json` - Configuración de TypeScript
- `tailwind.config.ts` - Configuración de Tailwind CSS
- `eslint.config.mjs` - Configuración de ESLint

## Tareas en VS Code

El proyecto incluye tareas preconfiguradas:

- `npm: dev` (Ctrl+Shift+B) - Inicia servidor de desarrollo
- `npm: build` - Compila para producción
- `npm: lint` - Ejecuta ESLint

## Configuraciones Iniciales

- App Router habilitado
- TypeScript configurado
- Tailwind CSS integrado
- ESLint preconfigurado
- Alias de importación: `@/*`
- Turbopack habilitado por defecto

## Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de React 19](https://react.dev)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
