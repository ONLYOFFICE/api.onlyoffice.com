# MetadataTemplateDto
The metadata template information.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The template ID. | [optional] [example: `3`] |
| **name** | **String** | The template name. | [optional] [example: `Contracts`] [nullable] |
| **visible** | **Boolean** | Specifies if the template is visible in the UI pickers. | [optional] [example: `true`] |
| **createBy** | [**EmployeeDto**](employee-dto.md) | The user who created the template. A user who has since left the portal comes back as the lost user placeholder. | [optional] |
| **createOn** | [**ApiDateTime**](api-date-time.md) | The template creation date. | [optional] |
| **modifiedBy** | [**EmployeeDto**](employee-dto.md) | The user who changed the template itself last: its name or its visibility. The creator until somebody changes it; a change of a field is recorded on the field, not here. | [optional] |
| **modifiedOn** | [**ApiDateTime**](api-date-time.md) | The date when the template was modified last. | [optional] |
| **fields** | [**List**](metadata-field-dto.md) | The template metadata fields. | [optional] [example: `[{id=9, templateId=3, name=Customer, type=0, order=0}]`] [nullable] |
