# AiExportTextToDocxRequest

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **title** | **String** | Document title (also the file name). | [required] |
| **content** | **String** | Markdown content to convert. | [required] |
| **folderId** | [**AiExportTextToDocxRequest_folderId**](ai-export-text-to-docx-request-folder-id.md) |  | [required] |
| **format** | **String** | Output format: `Docx` (the default when omitted), `Pdf`, or `Md`, which stores the markdown verbatim instead of converting it. | [optional] [enum: `Docx`, `Pdf`, `Md`] |
