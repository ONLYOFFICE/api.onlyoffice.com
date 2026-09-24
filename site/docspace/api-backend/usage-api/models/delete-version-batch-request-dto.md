# DeleteVersionBatchRequestDto
The file whose versions are deleted, and the versions to delete.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **returnSingleOperation** | **Boolean** | Which operations the answer carries: `true` returns the operation this call started and nothing else, `false` returns every operation of the same kind that the caller has running or unread. When nothing was queued, which happens for an empty selection, `true` falls back to the full list. | [optional] |
| **deleteAfter** | **Boolean** | Whether the finished operation is still reported: `false` keeps its final record readable through `GET api/2.0/files/fileops` until it has been read once, `true` drops the record as soon as the work is done. It does not postpone the deletion and does not delete anything of its own. | [optional] |
| **fileId** | **Integer** (int32) | The file whose history the versions are taken from; only files stored in the portal itself are addressed here. | [required] |
| **versions** | **List** (int32) | The version numbers to remove, as reported by `GET api/2.0/files/file/{fileId}/history`. At least one number has to be sent: an empty list removes the file itself instead of one of its versions. The number of the current version is refused outright, while a number that no longer exists is passed over without a complaint. | [required] [nullable] |
