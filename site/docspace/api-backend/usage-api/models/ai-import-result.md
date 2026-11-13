# AiImportResult
The outcome of a prompt bundle import: either every entry was stored, with counts, or none was and the errors are reported per entry.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when the whole bundle was imported. | [required] [example: `true`] |
| **imported** | [**AiImportResult_imported**](ai-import-result-imported.md) |  | [optional] |
| **errors** | [**List**](ai-import-error.md) | What was rejected, per entry. Present on failure - and then nothing was imported. | [optional] [example: `[]`] |
