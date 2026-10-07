# RoomsMetadataSearchRequestDto
The typed form of the metadata search of the rooms: the same filter the rooms listing takes in the metadataTemplateId and metadataFilters query parameters, with the conditions as objects instead of a JSON string.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **metadataTemplateId** | **Integer** (int32) | The ID of the metadata template the rooms must be assigned to. On its own it narrows the listing to the rooms carrying the template; together with the conditions it also pins the template the filtered fields belong to. | [optional] [example: `1`] [nullable] |
| **metadataFilters** | [**List**](metadata-filter-condition-request.md) | The metadata filter conditions, combined with AND. A custom field is addressed by its name instead of the field ID. | [optional] [example: `[{fieldId=1, op=eq, value=ACME}, {name=Client, op=eq, value=ACME}]`] [nullable] |
| **filterValue** | **String** | The text to search for in the room titles and in the custom fields. | [optional] [example: `ACME`] [nullable] |
| **searchArea** | [**SearchArea**](search-area.md) | The section to search in: the active rooms (the default), the archive or the templates. | [optional] [enum: `Active`, `Archive`, `Any`, `RecentByLinks`, `Templates`, `Knowledge`, `ResultStorage`, `AiAgents`, `Forms`, `FormTemplates`] |
| **type** | [**List**](room-type.md) | The room types to search among. | [optional] [example: `[5]`] [nullable] |
| **count** | **Integer** (int32) | The number of rooms to return, from 1 to 100. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | **Integer** (int32) | The zero-based index of the first room to return. | [optional] [example: `0`] [min: 0] [max: 2147483647] |
| **sortBy** | **String** | The field to sort by, a name of the SortedByType values. | [optional] [example: `DateAndTime`] [nullable] |
| **sortOrder** | [**SortOrder**](sort-order.md) | The sort order. | [optional] [enum: `0`, `1`] |
