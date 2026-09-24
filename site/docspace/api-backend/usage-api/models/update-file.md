# UpdateFile
The changes to make to a file: a new title, an earlier version to restore, or both.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **title** | **String** | The new title of the file, without an extension - the stored extension is kept whatever the title says, so a rename cannot change the format. Left empty, the file keeps its name. | [optional] [example: `My Document`] [minLength: 0] [maxLength: 165] [nullable] |
| **lastVersion** | **Integer** (int32) | The version to restore on top of the history, as reported by `GET api/2.0/files/file/{fileId}/history`; 0 or less leaves the versions untouched. | [optional] [example: `1`] |
