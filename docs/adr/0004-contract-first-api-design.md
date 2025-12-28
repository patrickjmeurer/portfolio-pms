# ADR 0004: Contract-first API Design

## Status
Accepted

## Context

The PMS consists of:
- a backend API
- multiple frontend consumers

Key concerns:
- avoiding implicit coupling
- preventing frontend breakage
- making API evolution explicit
- enabling independent reasoning about data structures

---

## Decision

The API will follow a **contract-first design approach**.

API contracts will be:
- defined explicitly before implementation
- shared between backend and frontend
- treated as the source of truth

Contracts will describe:
- request payloads
- response payloads
- validation rules

---

## Consequences

### Positive
- Clear and explicit integration boundaries
- Reduced risk of accidental breaking changes
- Improved maintainability and refactoring safety
- Strong signal of engineering maturity

### Negative
- Additional upfront effort
- Requires discipline to keep contracts aligned with domain changes

---

## Notes

Contracts are not business logic.
Domain rules remain inside the backend domain layer.

If contract maintenance becomes a bottleneck, this approach may be reassessed.
