# RunBuilderScriptOutputRequest
Where one produced file goes.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **fileId** | **Integer** (int32) | The id of a portal file to store the result in as a new version, as reported by a folder listing such as `GET api/2.0/files/{folderId}`. | [optional] [example: `1234`] [nullable] |
| **folderId** | **Integer** (int32) | The id of a folder to save the result in as a new file, as reported by a folder listing such as `GET api/2.0/files/{folderId}`. | [optional] [example: `5678`] [nullable] |
| **title** | **String** | The title of the new file, when it has to differ from the name the script saved the result under. | [optional] [example: `Quarterly report.pdf`] [nullable] |
