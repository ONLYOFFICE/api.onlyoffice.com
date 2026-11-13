# AiBulkAssignmentResult
The outcome of a bulk assign: either every entry was stored, or none was and the errors are reported per action. Every entry is validated before anything is written, so one bad entry never leaves the assignments half-written.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when every entry was persisted. | [required] [example: `true`] |
| **errors** | [**List**](ai-bulk-assignment-result-errors-item.md) | What was rejected, per action. Present on failure - and then no entry was persisted. | [optional] [example: `[]`] |
