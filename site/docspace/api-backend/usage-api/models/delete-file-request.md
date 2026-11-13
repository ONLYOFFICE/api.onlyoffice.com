# DeleteFileRequest
The parameters of a single file deletion.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **deleteAfter** | **Boolean** | Whether `GET api/2.0/files/fileops` keeps the finished deletion: `true` removes it from that list, so its result cannot be read; `false` keeps it there. | [optional] [example: `false`] |
| **immediately** | **Boolean** | Where the file goes: `false` moves it to the trash, from where it can be restored, `true` deletes it for good. | [optional] [example: `false`] |
