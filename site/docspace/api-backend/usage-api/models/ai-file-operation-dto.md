# AiFileOperationDto
One background file operation of the caller, as it stood when the answer was built.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The identifier of the operation, the one to pass to `PUT api/2.0/files/fileops/terminate/{id}` to stop it. Operations belong to the account that started them, so an identifier of somebody else is never listed here. | [required] [example: `a1f4c9b2-3d8e-4f77-9b16-2c5de8f0a913`] [nullable] |
| **Operation** | [**AiFileOperationType**](ai-file-operation-type.md) | What the operation does with the entries, which also decides what else is reported: only a download fills `url`, and a deletion leaves `files` and `folders` empty. | [required] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`] |
| **progress** | **Integer** (int32) | How far the operation has come, from 0 to 100. Reaching 100 only means it stopped; whether it did what it was asked for is told by `error`. | [required] [example: `100`] |
| **error** | **String** | The reason the operation could not finish its work, in the language of the request. Empty when nothing went wrong, which is the only way to tell a successful operation from a failed one. | [required] [example: `Folder not found.`] [nullable] |
| **processed** | **String** | How many entries the operation has handled so far, written as a decimal number in a string. It counts items, not percent, and stays behind `progress` on operations that walk into subfolders. | [required] [example: `12`] [nullable] |
| **finished** | **Boolean** | Whether the operation has stopped running. A finished operation is reported once and then dropped, so the next read of the operation list no longer contains it. | [required] [example: `true`] |
| **url** | **URI** (uri) | The address the packed archive can be downloaded from once a bulk download has finished. Empty for every other kind of operation. | [optional] [example: `https://portal.example.com/filehandler.ashx?action=bulk`] [nullable] |
| **files** | [**List**](ai-file-entry-base-dto.md) | The files the operation produced or moved, in the order it wrote them down. Empty while nothing has been written yet and for a deletion, which reports no entries at all. | [optional] [example: `[{id=10, title=document.docx}]`] [nullable] |
| **folders** | [**List**](ai-file-entry-base-dto.md) | The folders the operation produced or moved, in the order it wrote them down. Empty while nothing has been written yet and for a deletion. | [optional] [example: `[{id=20, title=Reports}]`] [nullable] |
| **status** | [**AiDistributedTaskStatus**](ai-distributed-task-status.md) | The state of the background task behind the operation, which tells a task that was cancelled or that crashed from one that ran to its end. | [optional] [enum: `0`, `1`, `2`, `3`, `4`] |
