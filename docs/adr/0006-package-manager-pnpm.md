# ADR 0006: Package Manager – pnpm

## Status
Accepted

## Context

The PMS is a monorepo containing multiple applications and shared packages.
The project requires:
- reliable workspace management
- strict dependency boundaries
- predictable module resolution

npm was considered as the default package manager but presents limitations
in enforcing dependency isolation in monorepo environments.

---

## Decision

The project will use **pnpm** as the package manager.

pnpm is chosen for:
- first-class monorepo support
- strict dependency isolation
- efficient disk usage via content-addressable storage
- strong compatibility with Turborepo

---

## Consequences

### Positive
- Reduced risk of implicit dependencies
- Faster and more predictable installs
- Better alignment with monorepo best practices

### Negative
- Requires pnpm to be installed globally
- Slight learning curve for contributors unfamiliar with pnpm

---

## Notes

Dependency strictness is treated as a feature, not a limitation.
