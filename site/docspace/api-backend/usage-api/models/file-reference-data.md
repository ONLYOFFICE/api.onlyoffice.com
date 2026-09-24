# FileReferenceData
The pair of values that names a document across portals, as it is written into a spreadsheet formula.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **fileKey** | **String** | The id of the document inside the portal named below. | [optional] [example: `512`] [nullable] |
| **instanceId** | **String** | The portal the document lives in. A reference whose value is not this portal cannot be resolved by the file key and falls back to the path or the link. | [optional] [example: `1`] [nullable] |
| **roomId** | **String** | The room the document lies in. It is filled in only for a document opened in a virtual data room, and stays empty everywhere else. | [optional] [example: `42`] [nullable] |
| **canEditRoom** | **Boolean** | Whether the caller may manage the room named above; it is only meaningful together with it. | [optional] [example: `true`] |
