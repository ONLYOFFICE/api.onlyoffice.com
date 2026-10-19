# EmailActivationSettingsRequestDto
Whether the calling user wants to keep seeing the reminder to confirm their email address.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **show** | **Boolean** | Whether the reminder is shown; send false to dismiss it for the calling user. | [optional] [example: `false`] |
| **lastModified** | **Date** (date-time) | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `2026-01-01T10:00:00`] |
