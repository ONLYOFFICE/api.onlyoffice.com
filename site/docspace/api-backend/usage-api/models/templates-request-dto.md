# TemplatesRequestDto
The files to put on the personal template list of the calling account.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **fileIds** | **List** (int32) | The files to put on the template list, by id, as reported by a folder listing such as `GET api/2.0/files/{folderId}`. Only a file stored in the portal itself can become a template, which is why an id here is always numeric. | [optional] [example: `[1, 2, 3]`] [nullable] |
