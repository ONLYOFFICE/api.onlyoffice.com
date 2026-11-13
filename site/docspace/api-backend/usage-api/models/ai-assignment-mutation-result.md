# AiAssignmentMutationResult
The outcome of an assign or unassign: a success, or an error naming the field that was refused.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when the assignment was persisted. | [required] [example: `true`] |
| **error** | [**AiErrorData**](ai-error-data.md) | Why the assignment was rejected. Present on failure. | [optional] |
