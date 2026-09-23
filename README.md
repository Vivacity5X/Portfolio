# Chaitanya Khandare — Portfolio

A personal portfolio built with React, TypeScript, and Vite. It presents Chaitanya's background, skills, selected projects, and contact information.

## Featured projects

- **DiagniAI — AI-Assisted Chest X-Ray Triage System:** Spring Boot backend with REST APIs, MySQL, JWT authentication and role-based access control, integrated with a FastAPI DenseNet121 service and Grad-CAM explainability. [Backend repository](https://github.com/diagni-ai/diagni-ai-backend)
- **Factory Backend Event Ingestion & Analytics System:** Spring Boot and MySQL backend for ingesting factory events, handling concurrent processing, and serving analytics APIs. [Repository](https://github.com/Vivacity5X/factory-backend)

## Tech stack

- React 19 and TypeScript
- Vite
- styled-components
- tsParticles
- Vercel Analytics

## Requirements

- Node.js 24.x
- npm 11 or later

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at `http://127.0.0.1:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Deployment

The repository includes a `vercel.json` configuration for Vercel deployment. Build the site with `npm run build`; the generated static site is in `dist/`.
