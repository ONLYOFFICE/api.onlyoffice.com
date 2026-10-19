# AiToolAnnotations
MCP tool annotations (`Tool.annotations` in the protocol). All hints are advisory and optional; the protocol's defaults are `readOnlyHint: false` and `destructiveHint: true`, which is why an unannotated tool is treated as one that may destroy state.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **title** | **String** |  | [optional] |
| **readOnlyHint** | **Boolean** |  | [optional] |
| **destructiveHint** | **Boolean** |  | [optional] |
| **idempotentHint** | **Boolean** |  | [optional] |
| **openWorldHint** | **Boolean** |  | [optional] |
