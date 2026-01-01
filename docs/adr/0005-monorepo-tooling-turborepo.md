# ADR 0005: Monorepo Tooling – Turborepo

## Status
Accepted

## Context

The PMS is structured as a monorepo containing:
- one backend API
- two frontend applications
- shared libraries for contracts and domain logic

The project prioritizes:
- architectural clarity
- explicit decisions
- minimal tooling overhead
- full control over folder structure

Nx was evaluated as a monorepo solution but introduced unnecessary complexity
and opinionated behavior early in the project lifecycle.

---

## Decision

The project will use **Turborepo** as the monorepo orchestration tool.

Turborepo is adopted to:
- coordinate builds and scripts across packages
- enable incremental execution
- remain neutral regarding architecture and structure

Folder structure and architectural boundaries are enforced by convention and documentation,
not by tooling-specific abstractions.

---

## Consequences

### Positive
- Minimal configuration
- Full control over project structure
- Predictable behavior
- Lower cognitive overhead

### Negative
- No built-in architectural enforcement
- Requires discipline to avoid boundary violations

---

## Notes

This project favors **explicit architectural documentation**
over implicit enforcement by tooling.

If architectural drift becomes an issue, stricter enforcement mechanisms may be introduced later.
