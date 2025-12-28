# ADR 0003: SSG vs SSR

## Status
Accepted

## Context

The public portfolio:
- must be SEO-friendly
- is mostly read-only
- changes infrequently
- prioritizes fast load times

Content updates are expected, but not continuously throughout the day.

---

## Decision

The public frontend will use **Static Site Generation (SSG)** with **incremental revalidation**.

Server-Side Rendering (SSR) will not be used initially.

---

## Consequences

### Positive
- Excellent SEO characteristics
- Fast response times
- Reduced operational complexity
- Predictable performance

### Negative
- Content updates are not reflected instantly
- Requires revalidation strategy

---

## Notes

If content freshness becomes critical or update frequency increases significantly,
this decision may be revisited and superseded by an SSR-based approach.
