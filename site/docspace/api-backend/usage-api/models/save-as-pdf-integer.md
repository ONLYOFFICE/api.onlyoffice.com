# SaveAsPdfInteger
The place and the name the PDF copy of a file is stored under.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **folderId** | **Integer** (int32) | The folder the PDF is created in; the caller has to be allowed to create files there. | [required] [example: `1`] |
| **title** | **String** | The name of the PDF, without an extension - `.pdf` is appended. Left empty, the name of the source file is reused with its extension replaced. | [required] [example: `My Document`] [nullable] |
