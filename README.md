# Buzzerboard

Sports athlete management dashboard built with Angular 19, Angular Material, and Apollo GraphQL.

## Live Demo

> **[buzzerboard.vercel.app](https://buzzerboard.vercel.app)** _(update after deploy)_

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Angular 19 (standalone components, Signals) |
| UI | Angular Material 19 (dark theme) |
| Data | Apollo Angular + GraphQL Code Generator |
| Charts | ng2-charts (Chart.js) |
| Mock API | json-graphql-server (local dev) |
| Deployment | Vercel (static SPA) |

## Getting Started

```bash
# Install dependencies
npm install

# Start mock GraphQL server + Angular dev server
npm start
```

The app runs at `http://localhost:4200` with the GraphQL API at `http://localhost:3000`.

## Architecture

- **Smart / Dumb component pattern** — Container components manage state; presentational components receive data via inputs
- **Angular Signals** — Reactive state management without RxJS subjects for UI state
- **Lazy-loaded routes** — Athletes and Analytics modules load on demand
- **GraphQL Code Generator** — Typed queries and services auto-generated from schema
- **Production fallback** — When the GraphQL server is unavailable (e.g. Vercel), services fall back to static data with client-side filtering/sorting, so the demo always works
