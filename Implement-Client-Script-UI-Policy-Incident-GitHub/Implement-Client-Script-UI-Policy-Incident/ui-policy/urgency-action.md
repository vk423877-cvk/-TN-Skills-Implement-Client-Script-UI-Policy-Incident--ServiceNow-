# UI Policy Action — Urgency

## Parent UI Policy

**High Impact Control**

## Configuration

| Property | Value |
|---|---|
| Field name | Urgency |
| Read-only | true |
| Visible | Leave as is |

## Behavior

When the parent UI Policy condition is met (`Impact = 1 - High`), the Urgency field becomes read-only.

When the condition becomes false and Reverse if false is enabled on the parent policy, the controlled behavior is reversed.

## Verification

1. Open an Incident.
2. Set Impact to High.
3. Verify that Urgency becomes read-only.
4. Change Impact to another value.
5. Verify that the read-only behavior is reversed.
