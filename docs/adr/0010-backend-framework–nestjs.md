# ADR 0010: Backend Framework – NestJS

## Status
Accepted

## Context

The PMS backend exposes a REST API consumed by multiple clients
(public portfolio and admin interface).

The backend must:
- integrate cleanly with a domain-centric architecture
- support dependency inversion
- allow infrastructure adapters (persistence, transport) to remain isolated
- be familiar and readable to technical evaluators

The project explicitly avoids framework-driven domain modeling.

---

## Decision

The backend API will be implemented using **NestJS**.

NestJS is adopted as a **transport and composition framework**, not as
the center of the architecture.

Key constraints:
- domain modules do not depend on NestJS
- controllers act only as HTTP adapters
- dependency injection is used strictly at the application boundary
- framework-specific concepts are confined to the API layer

---

## Consequences

### Positive
- Clear separation between domain and transport
- Built-in dependency injection
- Mature ecosystem and tooling
- Familiarity for most backend engineers

### Negative
- Additional abstraction layer
- Risk of overusing framework features if discipline is lost

---

## Notes

NestJS is treated as replaceable infrastructure.
If requirements change, the domain and contracts should remain unaffected.
This decision builds upon the domain-centric architecture described in ADR 0007.