# StartEdit
The body of an editing session request.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **editingAlone** | **Boolean** | Claims the file for this caller alone: the session is opened without asking the document service to track co-editing, and the call is refused when anybody else already has the file open. Left off, an ordinary co-editing session is opened and others may join it. | [optional] [example: `false`] |
