# AiAssignmentMutationResult
Outcome of `AssignmentsEngine.assign` / `AssignmentsEngine.unassign`. Either a success or a field-scoped error suitable for displaying in the profile editor.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when the assignment was persisted. | [required] [example: `true`] |
| **error** | [**AiTErrorData**](ai-t-error-data.md) | Why the assignment was rejected. Present on failure. | [optional] |
