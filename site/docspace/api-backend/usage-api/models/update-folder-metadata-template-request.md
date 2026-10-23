# UpdateFolderMetadataTemplateRequest
The new state of a template assignment on a folder: whether the template cascades to the content of the folder and how.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **cascade** | **Boolean** | Whether the template cascades from the folder to the folders and files below it: true turns the cascade on, false turns it off while the template stays on the folder. | [optional] [example: `true`] |
| **conflictResolveType** | [**MetadataConflictResolveType**](metadata-conflict-resolve-type.md) | How the cascade treats a value an entry below already holds. | [optional] [enum: `0`, `1`] |
