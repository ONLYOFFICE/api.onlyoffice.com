# OrdersItemRequestDtoInteger
One entry to move to a given position inside its folder.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **entryId** | **Integer** (int32) | The file or folder to move. | [required] [example: `1`] |
| **entryType** | [**FileEntryType**](file-entry-type.md) | Which of the two the identifier names, because a file and a folder may carry the same number. | [required] [enum: `1`, `2`] |
| **order** | **Integer** (int32) | The position the entry is to take, counting from 1. The entry that held it, and everything after it, is shifted to make room. A dotted path such as 1.2.3 is accepted as well, of which only the last segment is read. | [required] [example: `1`] [min: 1] [max: 2147483647] |
