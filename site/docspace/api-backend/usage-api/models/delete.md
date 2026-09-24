# Delete
The parameters of a single file deletion.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **deleteAfter** | **Boolean** | When to delete: `true` waits until the editing session on the file has ended, `false` deletes at once, pulling the file away from whoever is working on it. | [optional] [example: `false`] |
| **immediately** | **Boolean** | Where the file goes: `false` moves it to Trash, from where it can be restored, `true` deletes it for good. Inside a room, where there is no Trash, deletion is always final. | [optional] [example: `false`] |
