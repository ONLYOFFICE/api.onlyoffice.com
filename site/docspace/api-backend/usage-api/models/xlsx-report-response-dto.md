# XlsxReportResponseDto
The answer to a report generation request: the queued task, the form whose answers are collected, and whether the report file is being created or refreshed.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **form** | [**FileDtoInteger**](file-dto-integer.md) | The original form the answers are collected from. It is not the produced spreadsheet - that one arrives with the task, once the task reports completion. | [optional] |
| **task** | [**DocumentBuilderTaskDto**](document-builder-task-dto.md) | The queued generation. Poll it with `GET api/2.0/files/file/{fileId}/xlsx` until it reports completion, and take the produced file from it then. | [optional] |
| **isNewFile** | **Boolean** | True when this run creates the report file, false when an existing report is rewritten in place, which means it keeps its id and the links already shared for it. | [optional] [example: `true`] |
