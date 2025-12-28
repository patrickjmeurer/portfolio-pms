# Portfolio Management System (PMS)

## Purpose

This project exists to replace a static, hard-coded portfolio with a living system that can evolve over time.

The goal is **not** to build a commercial product, but to demonstrate real-world engineering capability:
- system design
- architectural decision-making
- backend/frontend integration
- domain separation
- long-term maintainability

This repository is treated as a **product**, not a demo or tutorial project.

---

## Problem Statement

The previous portfolio suffered from:
- Hard-coded content
- High friction to update information
- Stagnant codebase with no evolution narrative

Updating content required code changes, rebuilds, and redeployments, which discouraged maintenance and iteration.

---

## Goals

- All public portfolio content must come from an API (no hard-coded data).
- Content updates must not require frontend code changes.
- Architectural decisions must be explicit and documented.
- The system must be evolvable over time without breaking public consumption.
- Balance architectural clarity with actual delivery.

---

## Non-Goals (v0.1)

- Commercialization
- Multi-tenant support
- Complex permission systems
- Advanced observability or infrastructure
- Polished admin UI

---

## High-Level Architecture

- **Backend**: Single API (PMS API)
- **Frontends**:
  - `public-web`: public-facing portfolio
  - `admin-web`: internal content management

Both frontends consume the same API.

The project is organized as a **monorepo** to enable shared contracts and domain logic.

---

## Initial Domains

- Profile
- Experience
- Project (professional/private projects only, not public demos yet)

Each domain owns:
- its entities
- its business rules
- its invariants

---

## Tech Stack

### Backend
- NestJS
- REST API
- PostgreSQL
- Prisma ORM

### Frontend
- Next.js
- Static Site Generation (SSG) with revalidation
- SEO-first approach

### Language
- TypeScript (everywhere)

---

## Documentation

Architectural decisions are documented as ADRs:
- Format: Simplified MADR
- Language: English
- Location: `docs/adr`

Superseded decisions are expected and encouraged.

---

## Project Status

This project starts at **v0.1** and will evolve incrementally.
