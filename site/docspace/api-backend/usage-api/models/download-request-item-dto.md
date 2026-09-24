# DownloadRequestItemDto
One file of a bulk download, together with the format it is converted to.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **key** | [**DownloadRequestItemDto_key**](download-request-item-dto-key.md) |  | [required] |
| **value** | **String** | The format the file is converted to before it is packed, as a file extension without a leading dot. | [required] [example: `pdf`] [nullable] |
| **password** | **String** | The password that opens the source file, for a file protected with one; a protected file cannot be converted without it. | [optional] [example: `password123`] [nullable] |
