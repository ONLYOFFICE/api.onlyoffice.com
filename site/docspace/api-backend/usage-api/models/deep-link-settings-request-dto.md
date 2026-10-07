# DeepLinkSettingsRequestDto
The deep link handling the portal applies on mobile devices.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **handlingMode** | [**DeepLinkHandlingMode**](deep-link-handling-mode.md) | Whether a link always opens in the browser, always in the native application, or asks the user each time. | [optional] [enum: `0`, `1`, `2`] |
| **lastModified** | **Date** (date-time) | Accepted for compatibility with earlier clients and not read: the server keeps its own value. | [optional] [example: `2026-01-01T10:00:00`] |
