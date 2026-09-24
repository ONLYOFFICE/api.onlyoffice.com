# aiToolsUpdateCustomServer request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** |  | [required] |
| **config** | **Object** | One MCP server configuration. The shape is intentionally open — MCP allows per-transport fields (`command`/`args` for stdio, `url` for HTTP, plus env, headers, etc.) and the storage layer stays agnostic to which transport is in use. | [required] |
| **entityId** | **String** |  | [optional] |
