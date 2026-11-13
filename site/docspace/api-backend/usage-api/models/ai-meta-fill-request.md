# AiMetaFillRequest

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **kind** | **String** | The entry's table. Only `file` for now: a folder or a room answers 400. | [required] [enum: `file`] |
| **id** | [**AiMetaGenerateRequest_id**](ai-meta-generate-request-id.md) |  | [required] |
| **prompt** | **String** | What to pay attention to; a hint for the model. | [optional] |
| **overwrite** | **Boolean** | Also replace the fields that already carry a value. Default false. | [optional] |
| **dryRun** | **Boolean** | Resolve the values but write nothing; the caller writes what the user confirms. Default true: a write needs an explicit false. | [optional] |
