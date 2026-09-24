# DeleteFolder
How a folder is to be deleted.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **deleteAfter** | **Boolean** | Whether the deletion waits for the editing sessions on the contents to end: with true a folder somebody is working in is removed once they are done, with false the deletion starts at once. | [optional] [example: `false`] |
| **immediately** | **Boolean** | Whether the folder is discarded for good instead of being moved to the Trash section: with false it can be restored from Trash, with true it cannot be recovered. Inside a room there is no Trash and the deletion is final either way. | [optional] [example: `false`] |
