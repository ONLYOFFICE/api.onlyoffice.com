# MetadataMatchDto
Where a text search met the metadata of a file, a folder or a room: one string value that holds the searched text, with the field it belongs to.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **templateId** | **Integer** (int32) | The ID of the metadata template the matching field belongs to. Null for a custom field, which belongs to no template the API shows. | [optional] [example: `3`] [nullable] |
| **fieldId** | **Integer** (int32) | The ID of the matching template field. Null for a custom field, which is addressed by its name alone. | [optional] [example: `12`] [nullable] |
| **fieldName** | **String** | The name of the matching field: the template field or the custom field as it is shown in the entry metadata. | [optional] [example: `Client`] [nullable] |
| **value** | **String** | The stored value that holds the searched text, as it was written, not only the matching part of it. | [optional] [example: `ACME Corporation`] [nullable] |
