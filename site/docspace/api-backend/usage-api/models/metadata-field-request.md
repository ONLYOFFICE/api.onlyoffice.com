# MetadataFieldRequest
The parameters of a metadata field.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The field name. | [optional] [example: `Contract number`] [nullable] |
| **type** | [**MetadataFieldType**](metadata-field-type.md) | The field type. | [optional] [enum: `0`, `1`, `2`, `3`, `4`] |
| **options** | [**List**](metadata-field-option-request.md) | The choice options of the field. | [optional] [example: `[{value=Red}, {value=Green}]`] [nullable] |
| **order** | **Integer** (int32) | The display position of the field inside the template: the fields are shown by it ascending, and equal positions keep the order of creation. | [optional] [example: `1`] [nullable] |
