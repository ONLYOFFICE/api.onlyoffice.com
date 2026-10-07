# EntryFieldDto
A metadata template field with its value on the entry.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The field ID. | [optional] [example: `9`] |
| **name** | **String** | The field name. | [optional] [example: `Customer`] [nullable] |
| **type** | [**MetadataFieldType**](metadata-field-type.md) | The field type. | [optional] [enum: `0`, `1`, `2`, `3`, `4`] |
| **options** | [**List**](metadata-field-option-dto.md) | The choice options of the field. | [optional] [example: `[{id=4f1e2d3c-5b6a-4788-99aa-0c1d2e3f4a55, value=Red}]`] [nullable] |
| **order** | **Integer** (int32) | The field display order inside the template. | [optional] [example: `0`] |
| **value** | [**MetadataValueDto**](metadata-value-dto.md) | The value of the field on the entry, or `null` when the entry holds no value for it. | [optional] |
