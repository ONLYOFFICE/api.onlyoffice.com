# ExternalDbSyncFormResultDto
What happened to one original form while the room was being exported to the external database.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The file of the original form whose collected data was exported. It is the form itself, not one of the filled copies, so the same id can be read with the file operations of the portal. | [optional] [example: `42`] |
| **title** | **String** | The name of that form file at the moment of the export. It is empty when the form file no longer exists, which is also the case in which the export of that entry fails. | [optional] [example: `Application.pdf`] [nullable] |
| **success** | **Boolean** | Whether the data of this form reached the external database. One rejected form does not stop the others, so a finished job can hold both successful and failed entries. | [optional] [example: `true`] |
| **error** | **String** | Why this form was not exported. It is empty for a successful entry, and for a failed one it carries either the message of the underlying failure or the generic export error of the portal. | [optional] [example: `Connection refused`] [nullable] |
