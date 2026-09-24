# AiTErrorData
A field-scoped validation error: which form field was rejected, and why.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **field** | **String** | The rejected field. | [required] [enum: `key`, `url`, `name`] |
| **message** | **String** | The human-readable reason the field was rejected. | [required] |
