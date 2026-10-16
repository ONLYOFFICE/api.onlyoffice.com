# AssignMetadataTemplates
The parameters for assigning metadata templates.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **templateIds** | **List** (int32) | The metadata template IDs. | [required] [example: `[1, 2]`] [nullable] |
| **cascade** | **Boolean** | Specifies if the templates are propagated to the folder sub-entries. | [optional] [example: `true`] |
| **conflictResolveType** | [**MetadataConflictResolveType**](metadata-conflict-resolve-type.md) | The conflict resolve type for the cascade assignment. | [optional] [enum: `0`, `1`] |
