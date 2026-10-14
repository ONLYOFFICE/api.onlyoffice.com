---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/enums/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# FilterSortBy

The sort criterion for file/folder lists. Passed via [TFrameFilter.sortBy](../type-aliases/TFrameFilter.md#sortBy).

Note: string values are API identifiers and may differ from the enum key names.

## Enumeration Members

<APITable>

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| `Author` | `"Author"` | Sort by author name. API value: `"Author"`. |
| `CreationDate` | `"DateAndTimeCreation"` | Sort by creation date. API value: `"DateAndTimeCreation"`. |
| `LastOpened` | `"LastOpened"` | Sort by last opened date. API value: `"LastOpened"`. |
| `ModifiedDate` | `"DateAndTime"` | Sort by last modification date. API value: `"DateAndTime"`. |
| `Name` | `"AZ"` | Sort alphabetically by name. API value: `"AZ"`. |
| `Room` | `"Room"` | Sort by room. API value: `"Room"`. |
| `RoomType` | `"roomType"` | Sort by room type. API value: `"roomType"`. |
| `Size` | `"Size"` | Sort by file size. API value: `"Size"`. |
| `Tags` | `"Tags"` | Sort by tags. API value: `"Tags"`. |
| `Type` | `"Type"` | Sort by file type/extension. API value: `"Type"`. |
| `UsedSpace` | `"usedspace"` | Sort by used storage space. API value: `"usedspace"`. |

</APITable>
