# MetadataFilterConditionRequest
One metadata filter condition as the clients send it: an element of the metadataFilters JSON of the listings and of the body of the search endpoints. All conditions are combined with AND.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **fieldId** | **Integer** (int32) | The ID of the template field the condition is on. A custom field is addressed by ASC.Files.Core.MetadataFilterConditionRequest.Name instead. | [optional] [example: `1`] |
| **name** | **String** | The name of a custom field, for the conditions on the custom fields, which have no identifier outside. Either the field ID or the name is given; the name is matched without regard to case. | [optional] [example: `Client`] [nullable] |
| **op** | **String** | The operator, one of ASC.Files.Core.MetadataFilterOperators. Optional: the field type alone determines how the condition is evaluated, so an omitted operator is accepted, while a present one has to match the field type. | [optional] [example: `eq`] [nullable] |
| **value** | **String** | The exact value: string fields, and number fields given a single value. A JSON number is accepted as well as a string. | [optional] [example: `ACME`] [nullable] |
| **from** | **String** | The inclusive lower bound of a range. A date given without a time (2026-06-01) is the start of that day (UTC). | [optional] [example: `2026-01-01`] [nullable] |
| **to** | **String** | The inclusive upper bound of a range. A date given without a time (2026-06-30) covers the whole day (UTC); a value with a time is an instant and is taken as is. | [optional] [example: `2026-06-30`] [nullable] |
| **optionIds** | **List** (uuid) | The options any of which the choice field must hold. | [optional] [example: `[4f1e2d3c-5b6a-4788-99aa-0c1d2e3f4a55]`] [nullable] |
