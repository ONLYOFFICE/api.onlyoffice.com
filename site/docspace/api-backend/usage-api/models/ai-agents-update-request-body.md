# aiAgentsUpdate request body

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **profileId** | **String** | Profile id to rebind (optional). | [optional] |
| **chatSettings** | **Object** | Chat settings (`ChatSettings`); requires a valid provider/model. | [optional] |
| **sendFormToExternalDB** | **Boolean** | Whether form results are sent to an external DB. | [optional] |
| **saveFormAsXLSX** | **Boolean** | Whether forms are saved as XLSX. | [optional] |
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
