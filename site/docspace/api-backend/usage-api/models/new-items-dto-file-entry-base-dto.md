# NewItemsDtoFileEntryBaseDto
One day of the entries the caller has not opened yet, the groups running from the most recent day backwards.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **date** | [**ApiDateTime**](api-date-time.md) | The day the grouped entries were last changed, written with the offset of the portal time zone. The time part is the moment of the newest entry of the group. | [required] |
| **items** | [**List**](file-entry-base-dto.md) | What changed on that day, the most recent first. Folders are left out of it, so an entry here is always a file or a room that holds them. | [required] [nullable] |
