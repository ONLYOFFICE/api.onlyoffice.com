# AiMetaGenerateRequest

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **kind** | **String** | The entry's table. Only `file` for now: a folder or a room answers 400. | [required] [enum: `file`] |
| **id** | [**AiMetaGenerateRequest_id**](ai-meta-generate-request-id.md) |  | [required] |
| **prompt** | **String** | What kind of metadata fields the caller is interested in; a hint for the model. | [optional] |
