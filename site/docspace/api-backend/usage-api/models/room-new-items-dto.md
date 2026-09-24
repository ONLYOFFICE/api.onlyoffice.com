# RoomNewItemsDto
The unseen entries of one room inside a day group.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **room** | [**FileEntryBaseDto**](file-entry-base-dto.md) | The room the entries were found in, in its short form: only the identifier, the title, the room type and the logo are filled in. | [optional] |
| **items** | [**List**](file-entry-base-dto.md) | The files of that room the caller has not opened yet, the most recently changed first. Reading them here does not clear the badges; opening the room itself does. | [optional] [nullable] |
