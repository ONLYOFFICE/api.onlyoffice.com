# SetAuditLifetimeSettingsRequest
How long the portal keeps its two security logs.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **loginHistoryLifeTime** | **Integer** (int32) | How many days login events are kept, from 1 to 180. | [optional] [example: `180`] |
| **auditTrailLifeTime** | **Integer** (int32) | How many days audit trail events are kept, from 1 to 180. | [optional] [example: `90`] |
| **lastModified** | **Date** (date-time) | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `2026-01-01T10:00:00`] |
