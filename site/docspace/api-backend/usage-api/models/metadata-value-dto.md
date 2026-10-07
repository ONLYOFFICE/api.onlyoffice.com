# MetadataValueDto
The value of a metadata field on an entry. Exactly one of the value properties is set, the one matching the field type: `stringValue` for a string field, `numberValue` for a number field, `dateValue` for a date field, `optionIds` for a single or multiple choice field.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **stringValue** | **String** | The string value. | [optional] [example: `ACME Corp`] [nullable] |
| **numberValue** | **Long** (int64) | The number value. | [optional] [example: `150000`] [nullable] |
| **dateValue** | [**ApiDateTime**](api-date-time.md) | The date value. | [optional] |
| **optionIds** | **List** (uuid) | The selected choice option IDs. | [optional] [example: `[4f1e2d3c-5b6a-4788-99aa-0c1d2e3f4a55]`] [nullable] |
