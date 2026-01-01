# ADR 0007: Domain-Centric Architecture

## Status
Accepted

## Context

Typical portfolio projects often revolve around frameworks and CRUD operations,
making it difficult to assess real engineering maturity.

The PMS is intended to demonstrate:
- business rule modeling
- separation of concerns
- independence from frameworks

---

## Decision

The project adopts a **domain-centric architecture**.

Domain modules:
- are implemented as standalone packages
- contain entities, use cases, and repository interfaces
- do not depend on frameworks, databases, or transport mechanisms

Frameworks (NestJS, Prisma, NextJS) are treated as adapters around the domain.

---

## Consequences

### Positive
- Clear separation between business logic and infrastructure
- High testability
- Easier replacement of frameworks or tools

### Negative
- More files and abstractions than a CRUD-based approach
- Requires architectural discipline

---

## Notes

This architecture prioritizes correctness and clarity over speed of initial implementation.