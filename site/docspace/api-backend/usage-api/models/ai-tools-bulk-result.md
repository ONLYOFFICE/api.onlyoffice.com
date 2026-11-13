# AiToolsBulkResult
The outcome of replacing the custom MCP servers: either every entry was stored, or none was and the errors are reported per server.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when every custom MCP server was persisted. | [required] [example: `true`] |
| **errors** | [**List**](ai-tools-bulk-result-errors-item.md) | What was rejected, per server. Present on failure - and then no server was persisted. | [optional] [example: `[]`] |
