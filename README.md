# BuzzerBoard

A sports platform admin console built with **Angular 19**, **GraphQL (Apollo Client)**, and **Angular Material**. Designed as an internal tool for managing athletes and monitoring platform analytics — the kind of dashboard a sports community platform operates on daily.

**Live Demo:** [Vercel Link]

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Angular 19 | Latest stable, standalone components, Signals |
| Apollo Client | GraphQL integration with typed queries |
| graphql-codegen | Auto-generated TypeScript types from GraphQL schema |
| Angular Material (M3) | UI components with Material 3 theming |
| ng2-charts / Chart.js | Data visualization |
| json-graphql-server | Mock GraphQL API from JSON |
| TypeScript (strict mode) | End-to-end type safety |

## Screenshots

_[Athletes Management screenshot]_

_[Platform Analytics screenshot]_

---

## Getting Started

```bash
git clone https://github.com/[your-username]/buzzerboard.git
cd buzzerboard
npm install
npm start          # Runs Angular dev server + GraphQL mock server concurrently
```

App runs at `http://localhost:4200`. GraphQL playground available at `http://localhost:3000`.

---

## Architecture

```
src/app/
├── core/              # Singleton services, Apollo config, theme service
├── shared/            # Reusable components (stat-card, chart-wrapper)
├── features/
│   ├── athletes/      # Athletes management (table, search, dialog)
│   └── analytics/     # Platform analytics (stat cards, charts)
├── layout/            # App shell (sidebar, toolbar)
├── graphql/           # .graphql query definitions
├── generated/         # Auto-generated types from graphql-codegen
└── environments/      # Dev/prod environment configs
```

## Architecture Decisions

**1. Smart/Dumb Component Pattern**
Container components own data fetching and state. Presentational components receive `@Input()` and emit `@Output()`. Keeps components testable, reusable, and decoupled from data sources.

**2. Signals — `toSignal()` in Services**
Services consume Apollo Observables and expose results as Signals. Components never interact with RxJS directly. Each service exposes `loading` and `error` signals alongside data, giving components granular control over UI state.

**3. GraphQL — `.graphql` Files + Codegen + TypedDocumentNode**
Queries are defined in dedicated `.graphql` files. `graphql-codegen` generates `TypedDocumentNode` objects and TypeScript interfaces from the schema. Result: fully typed queries and responses with zero manual type casting.

**4. Grouped Provider Functions**
App-level configuration uses composable provider factories (`provideGraphQL()`, `provideAppTheme()`) in `app.config.ts`. Keeps the config modular, readable, and easy to extend.

**5. Signals over NgRx**
For a project of this scope, a full state management library would be over-engineering. Angular Signals provide reactive state at the service level without the boilerplate of actions, reducers, and effects.

**6. Material 3 Theming with CSS Custom Properties**
Dark mode by default. Light mode toggle managed by a `ThemeService` using Signals. Theme switching via CSS class on `<body>` — no runtime style recalculation.

**7. Environment-Based Data Fallback**
In development, services fetch data from the GraphQL mock server. In production (Vercel), where a Node process can't run, services load from a local TypeScript data file with the same interface. The app works in both environments without code changes.

**8. Lazy-Loaded Feature Routes**
Each feature module loads only when navigated to, keeping the initial bundle small.

---

## Features

### Athletes Management
- Material data table with sorting and pagination
- Search by name, filter by sport
- Click any row to view athlete detail dialog
- Data sourced via GraphQL with typed queries

### Platform Analytics
- 4 KPI stat cards (Total Athletes, Active Fans, Monthly Revenue, Live Streams)
- Fan Growth line chart (12 months)
- Engagement by Sport bar chart (8 sports)
- Responsive grid layout

---

## GraphQL

Queries are defined in `src/app/graphql/*.graphql` and compiled to typed document nodes via `graphql-codegen`.

```bash
npm run codegen      # Regenerate types after schema/query changes
```

The mock API is powered by `json-graphql-server`, which generates a full GraphQL API (with filtering, sorting, and pagination) from `src/assets/mock-data/db.json`.

---

## Scripts

| Command | Description |
|---|---|
| `npm start` | Run Angular + GraphQL server concurrently |
| `npm run build` | Production build |
| `npm run codegen` | Regenerate GraphQL TypeScript types |
| `npm run serve:api` | Run mock GraphQL server only |

---

Built with Angular 19 and GraphQL.
