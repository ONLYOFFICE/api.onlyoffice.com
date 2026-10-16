# ExternalDbSyncTaskDto
The state of the job that exports the collected form data of a form filling room into the external database of the portal.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The identifier of the job, which stays the same while a job for this room exists and is worth quoting when a failure has to be traced in the portal logs. Polling is done by room, so the value is not needed to read the state again. | [required] [example: `ExternalDbSyncTask_1_42`] [nullable] |
| **error** | **String** | The message of a failure that stopped the whole job. It is empty while the job is running and after a job that ended without such a failure; a job that finished with individual forms rejected reports those in `forms` and leaves this field empty. | [optional] [example: `Connection refused`] [nullable] |
| **percentage** | **Integer** (int32) | How much of the work is done, from 0 to 100. It advances as the forms of the room are processed one by one, so it is a usable progress indicator for a room with many forms and jumps straight to the end for a room with one. | [required] [example: `75`] |
| **isCompleted** | **Boolean** | Whether the job has ended. It is set both for a job that finished its work and for one that stopped on an error, so this is the flag to poll for, and `status` and `error` are what tell the two apart. | [required] [example: `false`] |
| **status** | [**DistributedTaskStatus**](distributed-task-status.md) | How the job ended, or how far it has got: queued, running, finished, cancelled or failed. It is the only field that separates a successful end from a failed one once `isCompleted` is set. | [required] [enum: `0`, `1`, `2`, `3`, `4`] |
| **forms** | [**List**](external-db-sync-form-result-dto.md) | The outcome for every original form of the room, one entry each. The list is empty while the job is running and is filled in only when the job ends, so it is what to read after `isCompleted` turns true; it stays empty for a room that holds no forms at all. | [required] [example: `[{id=42, title=Application.pdf, success=true, error=null}]`] [nullable] |
