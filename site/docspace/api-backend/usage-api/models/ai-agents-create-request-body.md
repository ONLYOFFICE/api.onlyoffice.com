# aiAgentsCreate request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **profileId** | **String** | Profile id bound to the agent. | [required] |
| **prompt** | **String** | Agent system prompt; stored as the room's `chatSettings.prompt`. | [required] |
| **private** | **Boolean** | Whether the agent room is private. | [optional] |
| **share** | **List** | Initial share entries (`FileShareParams`). | [optional] |
| **attachDefaultTools** | **Boolean** | Whether to attach the default DocSpace MCP tool server. | [optional] |
| **title** | **String** | Agent (room) title. | [optional] |
| **quota** | **BigDecimal** | Room quota in bytes. | [optional] |
| **indexing** | **Boolean** | Whether room content is indexed for search. | [optional] |
| **denyDownload** | **Boolean** | Whether downloading room content is denied. | [optional] |
| **lifetime** | **Object** | Room data lifetime policy (`RoomDataLifetimeDto`). | [optional] |
| **watermark** | **Object** | Watermark settings (`WatermarkRequestDto`). | [optional] |
| **logo** | **Object** | Room logo (`LogoRequest`). | [optional] |
| **tags** | **List** | Room tags. | [optional] |
| **color** | **String** | Room accent color. | [optional] |
| **cover** | **String** | Room cover image id. | [optional] |
