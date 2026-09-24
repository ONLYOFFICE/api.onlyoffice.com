# aiAttachmentsSaveFile.request.input
A file attachment draft to persist.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **path** | **String** | Storage path/key of the file. | [required] |
| **content** | **String** | File contents. | [required] |
| **type** | **BigDecimal** | File type discriminator. | [required] |
| **title** | **String** | Optional display title. | [optional] |
