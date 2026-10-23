# AiErrorData
A field-scoped validation error: which form field was rejected, and why.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **field** | **String** | The rejected field. | [required] [enum: `key`, `url`, `name`, `text`] |
| **message** | **String** | The human-readable reason the field was rejected. | [required] |
| **code** | [**AiErrorCode**](ai-error-code.md) | Optional: producers that know the reason set it (the prompts engine does). | [optional] [enum: `required`, `conflict`, `not_found`, `invalid`] |
