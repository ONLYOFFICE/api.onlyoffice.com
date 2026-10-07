# FolderMetadataSearch
The typed form of the metadata search of a folder: the same filter the folder listing takes in the metadataTemplateId and metadataFilters query parameters, with the conditions as objects instead of a JSON string.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **metadataTemplateId** | **Integer** (int32) | The ID of the metadata template the entries must be assigned to. On its own it narrows the listing to the entries carrying the template; together with the conditions it also pins the template the filtered fields belong to. | [optional] [example: `1`] [nullable] |
| **metadataFilters** | [**List**](metadata-filter-condition-request.md) | The metadata filter conditions, combined with AND. A custom field is addressed by its name instead of the field ID. | [optional] [example: `[{fieldId=1, op=eq, value=ACME}, {name=Client, op=eq, value=ACME}]`] [nullable] |
| **filterValue** | **String** | The text to search for in the titles and in the custom fields. | [optional] [example: `ACME`] [nullable] |
| **withSubFolders** | **Boolean** | Specifies whether to search the whole subtree of the folder (the default) or its direct children only. | [optional] [example: `true`] [nullable] |
| **filterType** | [**FilterType**](filter-type.md) | The filter type. | [optional] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `17`, `20`, `22`, `23`, `24`, `25`, `26`] |
| **count** | **Integer** (int32) | The number of entries to return, from 1 to 100. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | **Integer** (int32) | The zero-based index of the first entry to return. | [optional] [example: `0`] [min: 0] [max: 2147483647] |
| **sortBy** | **String** | The field to sort by, a name of the SortedByType values. | [optional] [example: `DateAndTime`] [nullable] |
| **sortOrder** | [**SortOrder**](sort-order.md) | The sort order. | [optional] [enum: `0`, `1`] |
