# TenantAuditSettingsDto
How long the portal keeps its login history and its audit trail.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **loginHistoryLifeTime** | **Integer** (int32) | How many days login events are kept, from 1 to 180; 180 when the portal never changed it. | [optional] [example: `180`] |
| **auditTrailLifeTime** | **Integer** (int32) | How many days audit trail events are kept, from 1 to 180; 180 when the portal never changed it. | [optional] [example: `90`] |
| **lastModified** | **Date** (date-time) | When the pair was last stored; when it never was, the moment it was read instead. | [optional] [example: `2026-01-01T00:00:00Z`] |
