# MetadataFieldDto
The metadata field information.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The field ID. | [optional] [example: `9`] |
| **templateId** | **Integer** (int32) | The ID of the template the field belongs to. | [optional] [example: `3`] |
| **name** | **String** | The field name. | [optional] [example: `Customer`] [nullable] |
| **type** | [**MetadataFieldType**](metadata-field-type.md) | The field type. | [optional] [enum: `0`, `1`, `2`, `3`, `4`] |
| **options** | [**List**](metadata-field-option-dto.md) | The choice options of the field. | [optional] [example: `[{id=4f1e2d3c-5b6a-4788-99aa-0c1d2e3f4a55, value=Red}]`] [nullable] |
| **order** | **Integer** (int32) | The field display order inside the template. | [optional] [example: `0`] |
