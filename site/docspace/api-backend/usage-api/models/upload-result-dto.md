# UploadResultDto
The outcome of storing an image in temporary storage before it is used as a room logo.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | True when the image was stored and its path is in the data field. A rejected image is reported with an error response rather than with a false here, so this field is true in every answer that carries a body. | [optional] [example: `true`] |
| **data** | **oas_any_type_not_mapped** |  | [optional] [nullable] |
| **message** | **String** | Left empty by this operation: nothing is reported here, and a refused image comes back as an error response instead. | [optional] [nullable] |
