# SetAuditLifetimeSettingsRequest
The lifetimes of the portal's two security logs: how long login events are kept, and how far back the recent audit events and the audit trail report reach.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **loginHistoryLifeTime** | **Integer** (int32) | How many days login events are kept, from 1 to 180. | [optional] [example: `180`] |
| **auditTrailLifeTime** | **Integer** (int32) | How many days back the recent audit events and the audit trail report reach, from 1 to 180. | [optional] [example: `90`] |
| **lastModified** | **Date** (date-time) | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `2026-01-01T10:00:00`] |
