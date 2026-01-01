# ADR 0008: Repository Pattern and In-Memory Implementations

## Status
Accepted

## Context

The domain layer must be testable without relying on infrastructure concerns
such as databases or ORMs.

To validate domain logic independently, a mechanism is needed to persist
and retrieve entities without external dependencies.

---

## Decision

The project adopts the **Repository Pattern** within the domain layer.

- Repository interfaces are defined in the domain
- Implementations are provided by infrastructure layers
- An in-memory repository implementation is created for validation and testing

The in-memory repository is not intended for production use.

---

## Consequences

### Positive
- Domain logic can be validated without infrastructure
- Clear separation of responsibilities
- Infrastructure can evolve independently

### Negative
- Additional abstraction
- Requires adapter implementations

---

## Notes

The in-memory repository acts as a stepping stone before introducing real persistence.