# ADR 0002: REST vs GraphQL

## Status
Accepted

## Context

The PMS exposes a single API consumed by:
- a public-facing portfolio website
- an internal admin interface

Key considerations:
- simplicity over flexibility
- explicit contracts
- ease of reasoning for evaluators
- low operational complexity

The data model is relatively stable and read-heavy on the public side.

---

## Decision

We will use a **REST-based API**.

Endpoints will be:
- resource-oriented
- versioned
- contract-driven

GraphQL is intentionally avoided at this stage.

---

## Consequences

### Positive
- Simpler mental model
- Easier debugging and observability
- Explicit contracts per endpoint
- Lower implementation overhead

### Negative
- Less flexible querying
- Potential over-fetching in some cases

---

## Notes

GraphQL may be reconsidered if:
- public consumption patterns become complex
- multiple consumers with divergent needs emerge

For the current scope, REST provides a better balance between clarity and delivery.
