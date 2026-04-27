# Taller Figma - Next.js Project

Un proyecto moderno de Next.js con TypeScript, Tailwind CSS y ESLint preconfigurado.

## Requisitos

- Node.js 18+ instalado
- npm (incluido con Node.js)

## Instalación

Las dependencias ya están instaladas. Para instalar nuevamente si es necesario:

```bash
npm install
```

## Comandos disponibles

### Desarrollo

Inicia el servidor de desarrollo en `http://localhost:3000`:

```bash
npm run dev
```

### Construcción

Crea una compilación optimizada para producción:

```bash
npm run build
```

### Ejecución en Producción

Inicia el servidor con la compilación de producción:

```bash
npm start
```

### Linting

Verifica el código con ESLint:

```bash
npm run lint
```

## Estructura del Proyecto

```
taller-figma/
├── app/                    # App Router (React 19)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── public/                # Archivos estáticos
├── .next/                 # Compilación (ignorar)
├── node_modules/          # Dependencias (ignorar)
├── package.json           # Dependencias del proyecto
├── tsconfig.json          # Configuración de TypeScript
├── next.config.ts         # Configuración de Next.js
├── tailwind.config.ts     # Configuración de Tailwind CSS
├── postcss.config.mjs     # Configuración de PostCSS
└── eslint.config.mjs      # Configuración de ESLint
```

## Stack Tecnológico

- **Next.js 16**: Framework React para producción
- **React 19**: Librería UI
- **TypeScript**: Tipado estático para JavaScript
- **Tailwind CSS 4**: Framework de utilidades CSS
- **ESLint**: Herramienta de análisis estático

## Tareas de VS Code

El proyecto incluye tareas preconfiguradas en `.vscode/tasks.json`:

- **npm: dev** - Inicia el servidor de desarrollo (tarea por defecto)
- **npm: build** - Genera compilación de producción
- **npm: lint** - Ejecuta ESLint

Puedes ejecutarlas usando `Ctrl+Shift+B` (build) o desde la paleta de comandos.

## Características

- ✅ App Router configurado
- ✅ TypeScript listo para usar
- ✅ Tailwind CSS integrado
- ✅ ESLint configurado
- ✅ Soporte para importaciones con alias (`@/*`)
- ✅ Git inicializado

## Desarrollo

Para comenzar a desarrollar:

1. Abre el proyecto en VS Code
2. Ejecuta `npm run dev` o usa la tarea de VS Code
3. El servidor estará disponible en `http://localhost:3000`
4. Los cambios se reflejarán automáticamente (hot reload)

## Recursos

Para más información sobre Next.js, consulta la [documentación oficial](https://nextjs.org/docs).
