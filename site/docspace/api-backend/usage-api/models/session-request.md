# SessionRequest
The file a chunked upload session is opened for, and how a clash with an existing name is settled.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **fileName** | **String** | The name to store the file under, extension included. Characters a title cannot hold are replaced and the name is truncated, so the stored title can differ from the one sent. | [required] [example: `My Document.docx`] [nullable] |
| **fileSize** | **Long** (int64) | The exact number of bytes that will be sent. The size is reserved when the session opens and compared with the parts as they arrive; below the portal chunk size the session takes the whole payload in one part, and above the portal limit for chunked uploads it is refused. | [optional] [example: `10485760`] |
| **relativePath** | **String** | A slash-separated chain of folder titles under the target folder to store the file in; folders in the chain that do not exist yet are created. Leave it empty to store the file in the folder from the path itself. | [optional] [example: `subfolder/documents`] [nullable] |
| **createOn** | [**ApiDateTime**](api-date-time.md) | The creation time to stamp on a newly created file instead of the moment the upload finishes. It is ignored when the upload lands on a file that already exists. | [optional] |
| **encrypted** | **Boolean** | Marks the stored file as client-side encrypted, which is how content uploaded into a private room is kept; with false the bytes are stored as they arrive. | [optional] [example: `false`] |
| **createNewIfExist** | **Boolean** | Settles the clash when the folder already holds a file with this name: true stores the upload beside it under a name with a numeric suffix, false takes the existing file over and adds the content to it as a new version. | [optional] [example: `true`] |
