# Architecture Diagrams

This folder contains UML and Mermaid diagrams summarizing the Divinum Officium web application as referenced from [the original perl implementation](https://github.com/rebots-online/divinum-officium/tree/master/web).

- `webapp_flowchart.*` shows the high level request flow.
- `liturgical_calendar.*` depicts the main calendar reckoning logic.
- `database_schema.*` outlines the translation from the original flat-file structure to SQLite tables.
- `optimal_sqlite_schema.*` highlights a proposed schema for future optimizations.

These diagrams serve as a snapshot reference for further planning and review.

## Repository Structure

`repo_structure.puml` and `repo_structure.mmd` visualize the current directory layout of the project. These diagrams are kept in sync with each development session. The diagrams were updated on 21 June 2025 after bootstrapping the `src` folder hierarchy.

The repo now includes Vite, Tailwind CSS, and NativeWind configuration files (`vite.config.ts`, `tailwind.config.js`, `babel.config.js`), captured in the repository structure diagrams.
