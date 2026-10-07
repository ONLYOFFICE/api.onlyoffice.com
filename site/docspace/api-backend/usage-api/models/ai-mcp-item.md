# AiMCPItem
Descriptor for a tool exposed by an MCP server.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | Tool name as registered on the MCP server (e.g. `web_search`, `insert_text`). | [required] [example: `docspace_get_folder`] |
| **description** | **String** | Human-readable description shown to the AI model and in the tools list UI. | [required] [example: `Read the contents of a DocSpace folder.`] |
| **inputSchema** | **Object** | JSON Schema describing the tool's input parameters. | [required] [example: `{type=object, properties={folderId={type=string}}, required=[folderId]}`] |
| **enabled** | **Boolean** | Whether this tool is currently enabled. Disabled tools are hidden from the AI model. | [optional] [example: `true`] |
| **serverType** | **String** | Server type (MCP server name / host tool group id) this tool belongs to — the key the persisted disabled map is stored under. Set by the source that enumerated the tool, so a caller-supplied tool can still be attributed to its group after being flattened into a single list: that is what lets the engine apply the disabled map to `actionArgs.tools` instead of trusting the caller to pre-filter. Wire-serializable, so it survives a remote (server-side) engine. | [optional] [example: `docspace`] |
| **requireApproval** | **Boolean** | Whether the consumer must show an approval dialog before this tool runs. Feeds the `autoAllow` flag on a `tool-call-pending` event together with the user's tool permission mode: `false` skips the dialog under the auto mode, the default (under ask only the persisted always-allow list does), `true` and `undefined` defer to that list; allow skips it for every tool. Host tools set it and default to `false`; MCP / custom-server tools leave it unset. Wire-serializable, so it survives a remote (server-side) engine. | [optional] [example: `false`] |
| **annotations** | [**AiToolAnnotations**](ai-tool-annotations.md) | The MCP tool annotations as the server declared them in `tools/list` (kept verbatim on the descriptor; never sent to the model). The approval flow reads two of them under the auto permission mode: `readOnlyHint: true` and `destructiveHint: false` run without the dialog, a destructive or unannotated tool keeps asking — see `resolveAutoAllow`. Wire-serializable. | [optional] |
