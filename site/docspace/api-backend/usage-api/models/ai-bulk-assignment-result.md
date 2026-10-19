# AiBulkAssignmentResult
Outcome of `AssignmentsEngine.bulkAssign`. Either every entry persisted, or no entries persisted and a per-key error report. The engine validates first and writes second so a single bad entry never leaves the assignment table in a half-written state.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when every entry was persisted. | [required] [example: `true`] |
| **errors** | [**List**](ai-bulk-assignment-result-errors-item.md) | What was rejected, per action. Present on failure - and then no entry was persisted. | [optional] [example: `[]`] |
