# aiToolsListSystemTools 200 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **groups** | **Map** | Tools by server name, covering both the host-configured system servers and the custom MCP servers registered for this scope. | [required] |
| **errors** | **Map** | Why a registered custom server could not be reached, keyed by server name. A server that answered is absent from this map. | [required] |
| **system** | **List** | Names of the host-configured system servers among the keys of `groups`; everything else there was registered as a custom server. | [required] |
