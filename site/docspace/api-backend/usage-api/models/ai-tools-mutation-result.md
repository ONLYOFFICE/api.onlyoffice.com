# AiToolsMutationResult
Outcome of an MCP-server CRUD call. Either success or a field-scoped error suitable for the settings form.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when the MCP server was persisted. | [required] [example: `true`] |
| **error** | [**AiTErrorData**](ai-t-error-data.md) | Why the MCP server was rejected. Present on failure. | [optional] |
