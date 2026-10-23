# EntryTemplateDto
A metadata template assigned to an entry: the template with every field of it, each field carrying its value on the entry.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The template ID. | [optional] [example: `3`] |
| **name** | **String** | The template name. | [optional] [example: `Project`] [nullable] |
| **visible** | **Boolean** | Specifies if the template is visible in the UI pickers. | [optional] [example: `true`] |
| **cascade** | **Boolean** | Whether the template cascades from this entry to the folders and files below it. Only a folder or a room can cascade; on a file the value is always false. | [optional] [example: `true`] |
| **conflictResolveType** | [**MetadataConflictResolveType**](metadata-conflict-resolve-type.md) | How the cascade of this entry treats a value an entry below already holds. Null while the template does not cascade from this entry. | [optional] [enum: `0`, `1`] |
| **fields** | [**List**](entry-field-dto.md) | The template fields with their values on the entry. | [optional] [example: `[{id=9, name=Customer, type=0, order=0, value={stringValue=ACME Corp}}]`] [nullable] |
