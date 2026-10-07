# CreateMetadataTemplateRequestDto
The request parameters for creating a metadata template.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The template name. | [required] [example: `Contracts`] [nullable] |
| **visible** | **Boolean** | Specifies if the template is visible in the UI pickers. | [optional] [example: `true`] |
| **fields** | [**List**](metadata-field-request.md) | The template metadata fields. | [optional] [example: `[{name=Contract number, type=0}, {name=Signed on, type=1}]`] [nullable] |
