# MetadataValueRequest
The parameters of a metadata field value.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **fieldId** | **Integer** (int32) | The field ID. | [required] [example: `1`] |
| **stringValue** | **String** | The string value. | [optional] [example: `ACME Corp`] [nullable] |
| **numberValue** | **Long** (int64) | The number value. | [optional] [example: `150000`] [nullable] |
| **dateValue** | **Date** (date-time) | The date value. A value without a time zone offset is treated as UTC, the same way the metadata filters treat their date bounds. | [optional] [example: `2026-06-01T00:00:00Z`] [nullable] |
| **optionIds** | **List** (uuid) | The selected choice option IDs. | [optional] [example: `[4f1e2d3c-5b6a-4788-99aa-0c1d2e3f4a55]`] [nullable] |
