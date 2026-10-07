# EntryMetadataDto
The metadata of an entry: the assigned templates with their values, and the custom fields holding a value.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **templates** | [**List**](entry-template-dto.md) | The assigned metadata templates, each field carrying its value on the entry. | [optional] [example: `[{id=3, name=Contracts, visible=true, fields=[]}]`] [nullable] |
| **customFields** | [**List**](custom-field-value-dto.md) | The custom fields with their values. | [optional] [example: `[{name=Project code, value=A-42}]`] [nullable] |
