# DeleteFolderRequest
How a folder is to be deleted.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **deleteAfter** | **Boolean** | Whether `GET api/2.0/files/fileops` keeps the finished deletion: `true` removes it from that list, so its result cannot be read; `false` keeps it there. | [optional] [example: `false`] |
| **immediately** | **Boolean** | Whether the folder is discarded for good instead of being moved to the Trash section: with false it can be restored from Trash, with true it cannot be recovered. Inside a room there is no Trash and the deletion is final either way. | [optional] [example: `false`] |
