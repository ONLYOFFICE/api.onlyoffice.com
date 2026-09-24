# AiTMCPItem
Descriptor for a tool exposed by an MCP server.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | Tool name as registered on the MCP server (e.g. `web_search`, `insert_text`). | [required] [example: `docspace_get_folder`] |
| **description** | **String** | Human-readable description shown to the AI model and in the tools list UI. | [required] [example: `Read the contents of a DocSpace folder.`] |
| **inputSchema** | **Object** | JSON Schema describing the tool's input parameters. | [required] [example: `{type=object, properties={folderId={type=string}}, required=[folderId]}`] |
| **enabled** | **Boolean** | Whether this tool is currently enabled. Disabled tools are hidden from the AI model. | [optional] [example: `true`] |
| **serverType** | **String** | Server type (MCP server name / host tool group id) this tool belongs to — the key the persisted disabled map is stored under. Set by the source that enumerated the tool, so a caller-supplied tool can still be attributed to its group after being flattened into a single list: that is what lets the engine apply the disabled map to `actionArgs.tools` instead of trusting the caller to pre-filter. Wire-serializable, so it survives a remote (server-side) engine. | [optional] [example: `docspace`] |
| **requireApproval** | **Boolean** | Whether the consumer must show an approval dialog before this tool runs. The engine reads it when deciding the `autoAllow` flag on a `tool-call-pending` event: `requireApproval === false` auto-allows the call (no dialog), `true` always prompts. `undefined` leaves the decision to the persisted always-allow list alone — so MCP / custom-server tools (which never set it) keep prompting as before, while host tools opt into auto-allow by default. Wire-serializable, so it survives a remote (server-side) engine. | [optional] [example: `false`] |
