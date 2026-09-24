# CheckDestFolderDto
The verdict on placing the requested files in the destination folder.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **result** | [**CheckDestFolderResult**](check-dest-folder-result.md) | Whether the destination folder accepts all of the requested files, only some of them or none at all. | [optional] [enum: `0`, `1`, `2`] |
| **files** | [**List**](file-entry-base-dto.md) | The requested files the destination accepts, each with the information it was listed under. The files it rejects are absent, so an empty list means that none of them is accepted. | [optional] [example: `[{title=document.docx, fileEntryType=2}]`] [nullable] |
