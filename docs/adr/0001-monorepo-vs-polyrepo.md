# ADR 0001: Monorepo vs Polyrepo

## Status
Accepted

## Context

The PMS consists of:
- one backend API
- two frontend applications (public and admin)

All applications:
- are written in TypeScript
- share API contracts
- evolve together
- are maintained by a single engineer

Key concerns:
- avoiding duplication of contracts and types
- keeping frontend and backend changes in sync
- making architectural boundaries explicit

---

## Decision

We will use a **monorepo** to host all applications and shared libraries.

The monorepo will contain:
- application-level code (apps)
- shared libraries for domains, contracts, and infrastructure concerns

Nx will be used to:
- enforce dependency boundaries
- enable clear separation between domains and layers
- support long-term maintainability

---

## Consequences

### Positive
- Shared API contracts between frontend and backend
- Easier refactoring across applications
- Clear visibility of domain boundaries
- Single source of truth for types and schemas

### Negative
- Increased initial complexity
- Requires discipline to avoid creating a “shared junk drawer”
- Tooling overhead compared to simple repos

---

## Notes

The monorepo choice is justified by:
- single ownership
- tight coupling between applications
- architectural clarity over repository isolation

If the system grows significantly or ownership changes, this decision may be revisited.
