# MetadataTemplateDto
The metadata template information.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The template ID. | [optional] [example: `3`] |
| **name** | **String** | The template name. | [optional] [example: `Contracts`] [nullable] |
| **visible** | **Boolean** | Specifies if the template is visible in the UI pickers. | [optional] [example: `true`] |
| **createBy** | **UUID** (uuid) | The user who created the template. | [optional] [example: `9a7d5f3e-1c2b-4e8a-9f60-3b7c2d1e5a44`] |
| **createOn** | [**ApiDateTime**](api-date-time.md) | The template creation date. | [optional] |
| **modifiedBy** | **UUID** (uuid) | The user who modified the template last. | [optional] [example: `9a7d5f3e-1c2b-4e8a-9f60-3b7c2d1e5a44`] |
| **modifiedOn** | [**ApiDateTime**](api-date-time.md) | The date when the template was modified last. | [optional] |
| **fields** | [**List**](metadata-field-dto.md) | The template metadata fields. | [optional] [example: `[{id=9, templateId=3, name=Customer, type=0, order=0}]`] [nullable] |
