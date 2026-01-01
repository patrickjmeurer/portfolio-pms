# ADR 0001: Monorepo vs Polyrepo

## Status
Accepted

## Context

The PMS consists of:
- one backend API
- two frontend applications (public and admin)
- shared domain modules and contracts

All components:
- are written in TypeScript
- share explicit API contracts
- evolve together
- are maintained by a single engineer

Key concerns include:
- avoiding duplication of contracts and domain models
- keeping frontend and backend changes synchronized
- making architectural boundaries explicit and reviewable

---

## Decision

The project will use a **monorepo** to host all applications and shared packages.

The monorepo will contain:
- application-level code (API, public web, admin web)
- domain modules
- shared contract definitions
- infrastructure adapters

The monorepo relies on:
- explicit architectural documentation (ADRs)
- clear package boundaries
- conventions enforced by code review

**Turborepo** is used strictly for task orchestration and caching.
It does not enforce architectural boundaries or influence design decisions.

---

## Consequences

### Positive
- Single source of truth for contracts and domain logic
- Easier refactoring across applications
- Clear visibility of system boundaries
- Reduced risk of model drift between frontend and backend

### Negative
- Higher initial setup complexity
- Requires discipline to avoid inappropriate coupling
- Architectural violations are prevented by process, not tooling

---

## Notes

This decision favors architectural clarity and long-term maintainability
over repository isolation.

If ownership becomes distributed or the system grows significantly,
this decision may be revisited.