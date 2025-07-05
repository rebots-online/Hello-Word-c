# Architecture Diagrams

This folder contains UML and Mermaid diagrams summarizing the Divinum Officium web application as referenced from [the original perl implementation](https://github.com/rebots-online/divinum-officium/tree/master/web).

- `webapp_flowchart.*` shows the high level request flow.
- `liturgical_calendar.*` depicts the main calendar reckoning logic.
- `database_schema.*` outlines the translation from the original flat-file structure to SQLite tables.
- `optimal_sqlite_schema.*` highlights a proposed schema for future optimizations.

Additional diagrams are timestamped for each session:
- `types_20250621.*` – interfaces created during the 2025-06-21 session.

These diagrams serve as a snapshot reference for further planning and review.

## Session Snapshots

Repository structures captured during development are stored with timestamps:

- `repo_structure_20250621_initial.*` – state before initializing the `src` directory.
- `repo_structure_20250621_final.*` – state after creating the initial project files.
- `repo_structure_20250623_final.*` – state after adding @originjs/vite-plugin-commonjs and updating documentation.
