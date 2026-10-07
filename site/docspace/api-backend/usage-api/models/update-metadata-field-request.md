# UpdateMetadataFieldRequest
The parameters of a metadata field update. Every property is optional: a property that is omitted keeps its current value.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The new field name. | [optional] [example: `Contract number`] [nullable] |
| **type** | [**MetadataFieldType**](metadata-field-type.md) | The new field type. The type can be changed only while the field has no values. | [optional] [enum: `0`, `1`, `2`, `3`, `4`] |
| **options** | [**List**](metadata-field-option-request.md) | The new choice options of the field. The options in use cannot be removed. | [optional] [example: `[{id=4f1e2d3c-5b6a-4788-99aa-0c1d2e3f4a55, value=Red}, {value=Green}]`] [nullable] |
| **order** | **Integer** (int32) | The new display position of the field inside the template: the fields are shown by it ascending. | [optional] [example: `1`] [nullable] |
