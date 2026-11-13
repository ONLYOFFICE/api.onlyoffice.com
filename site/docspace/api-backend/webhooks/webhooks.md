---
sidebar_position: 0
sidebar_label: Overview
---

# ONLYOFFICE Apps Webhooks

Wire contract for **outbound** DocSpace webhook deliveries.

This document is not the REST API spec and shares no schemas with it. The payloads are models of their
own (`UserPayload`, `GroupPayload`, `FilePayload`, `FolderPayload`, `RoomPayload`,
`FormSubmitPayload`).

Every trigger is an entry of `webhooks` below, and its body is the `*Delivery` schema of its
payload: the envelope with `payload` typed. The same mapping, in machine-readable form, is
`x-docspace-trigger-payloads`.

## Serialization

1. Property names are camelCase.
2. A property that holds its default value - `null`, `false`, `0` or the default member of an enum - is
   left out of the body. Consequently almost nothing here is `required`, and an absent property never
   means "unset": it means the default value.
3. A body carries the properties of its schema and no others; the computed ones among them are sent
   like the rest.
4. Every timestamp, in the envelope and in the payload alike, is a UTC ISO-8601 value in whole seconds
   ending in `Z`, e.g. `2026-09-17T10:22:56Z`.
5. An entry id is a number for an entry kept in the portal's own storage and a string for one in
   third-party storage, modelled here as `oneOf` integer and string.

## Transport

Every delivery is a `POST` with `Content-Type: application/json; charset=utf-8`. Redirects are not
followed. Each request waits 30s for a response by default (an installation can change it with the
`webhooks:requestTimeout` setting), so a receiver must acknowledge fast and process out of
band. Any non-2xx answer, timeout or network error is a failed attempt. A failed delivery is retried
after 1m, 5m, 30m, 2h, 5h and 10h (each +/-10% jitter), i.e. 7 attempts over about 18 hours by
default (an installation can change the schedule with the `webhooks:retryIntervals`
setting), and then abandoned. A portal admin or the subscription's creator can retry it manually from
the delivery log, which starts a fresh series under the same `event.id`. When a delivery is abandoned and
the subscription has had no successful delivery for more than 3 days by default (an
installation can change it with the `webhooks:trustedDaysCount` setting), the subscription is
disabled: nothing is sent to it until a portal admin or its creator enables it again.

## Headers

- `x-docspace-signature-256` - `sha256=` followed by the uppercase hex HMAC-SHA256 of the raw
  body, keyed with the subscription's secret. GitHub emits lowercase hex, so compare case-insensitively.
  This is the only header that is authenticated.
- `x-docspace-event-id` - a copy of `event.id`.
- `x-docspace-event-timestamp` - a copy of `event.createOn`, in the same ISO-8601 UTC
  spelling, e.g. `2026-09-17T10:22:56Z`.

The last two exist so a receiver can drop an already-seen delivery without parsing the body. They are
**not** covered by the signature, which is computed over the body alone, so anything in transit can
rewrite them. Reject on them freely - dropping a delivery is fail-safe, and whoever can rewrite a header
could drop the request instead - but never accept on them: after verifying, read `event.id` from the
parsed body, it is the authoritative value.

The signature covers the body only; it does not prove when the request was sent. `event.createOn` is the
moment of the event, not of the request: it stays the same through the automatic retries (about 18
hours on the default schedule) and through a manual retry at any later time, so a freshness window on
it, or on the timestamp header, rejects legitimate retries. Deduplicate on `event.id` instead: keep the
ids already processed and drop a delivery whose id is among them. That is the replay defence.

## Trigger families

| Family | Description |
|------------- | -------------|
| [**user**](user/user.md) | Members of the portal: added, invited, changed or removed. |
| [**group**](group/group.md) | Groups of members. |
| [**file**](file/file.md) | Files, in rooms and in the personal section alike. |
| [**folder**](folder/folder.md) | Folders, in rooms and in the personal section alike. |
| [**room**](room/room.md) | Rooms. |
| [**form**](form/form.md) | PDF forms: submitted, filled out by everyone, or stopped. |
| [**agent**](agent/agent.md) | AI agents, which are rooms of their own kind and are delivered as rooms. |
