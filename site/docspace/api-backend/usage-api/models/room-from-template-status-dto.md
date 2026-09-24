# RoomFromTemplateStatusDto
The progress of the job that creates a room out of a room template.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **roomId** | **Integer** (int32) | The room the job is creating. It is meaningful once the room exists, which is guaranteed only after `isCompleted` turns true and `error` stays empty; until then it carries no usable id. | [required] [example: `456`] |
| **progress** | **Double** (double) | How far the job has got. The value climbs while the contents of the template are being copied into the new room and reaches its maximum at the very end. | [required] [example: `50.0`] |
| **error** | **String** | Why the job stopped. It is empty while the job runs and after a successful one, and a filled value means that no room was created, so the request has to be repeated rather than waited out. | [required] [example: `Room creation failed`] [nullable] |
| **isCompleted** | **Boolean** | Whether the job has ended. It is set both after a successful creation and after a failure, so it is the flag to poll for, while `error` is what separates the two outcomes. | [required] [example: `false`] |
