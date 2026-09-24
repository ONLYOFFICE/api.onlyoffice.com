# DefaultTemplateItemDto
The blank document configured for one extension.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **selectedFile** | **Integer** (int32) | The copy stored in the portal that serves as the blank for this extension. A null means no custom blank has been chosen and new documents start from the portal's built-in one; the other fields of the entry are then empty as well. | [optional] [example: `123`] [nullable] |
| **fileExtension** | **String** | The extension the entry describes, in lower case with the leading dot. It is the value to send back when this blank is replaced or reset. | [required] [example: `.docx`] [nullable] |
| **fileTitle** | **String** | The name the custom blank was copied under, useful for showing which document was chosen. Empty while the built-in blank is in use. | [optional] [example: `Company letter.docx`] [nullable] |
| **lastModified** | **Date** (date-time) | When the custom blank was last changed, in the time zone of the portal. Null while the built-in blank is in use. | [optional] [example: `2026-03-18T11:42:07`] [nullable] |
| **fileSize** | **Long** (int64) | The size of the custom blank in bytes. Null while the built-in blank is in use. | [optional] [example: `1024`] [nullable] |
| **viewUrl** | **String** | The address the custom blank can be downloaded from, already carrying the access key of the calling account. Empty while the built-in blank is in use. | [optional] [example: `https://example.com/filehandler.ashx?action=download&fileid=123`] [nullable] |
