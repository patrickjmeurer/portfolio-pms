# ADR 0009: Prisma as Persistence Adapter

## Status
Accepted

## Context

The PMS requires a relational database with strong schema guarantees and
developer-friendly tooling.

The persistence layer must:
- not leak into the domain
- be replaceable
- support PostgreSQL

---

## Decision

Prisma is adopted as the persistence adapter.

Prisma is used exclusively in the infrastructure layer:
- Prisma models are not domain entities
- Mapping between domain and persistence models is explicit
- The domain depends only on repository interfaces

---

## Consequences

### Positive
- Strong schema safety
- Explicit mapping prevents domain leakage
- Clear persistence boundary

### Negative
- Mapping code adds verbosity
- Two representations of the same data must be maintained

---

## Notes

This decision reinforces the principle that persistence is an implementation detail.