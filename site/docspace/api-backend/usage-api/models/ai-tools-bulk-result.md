# AiToolsBulkResult
Outcome of `ToolsEngine.replaceAllCustomServers` — either every entry persisted, or no entries persisted plus a per-key error report.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when every custom MCP server was persisted. | [required] [example: `true`] |
| **errors** | [**List**](ai-tools-bulk-result-errors-item.md) | What was rejected, per server. Present on failure - and then no server was persisted. | [optional] [example: `[]`] |
