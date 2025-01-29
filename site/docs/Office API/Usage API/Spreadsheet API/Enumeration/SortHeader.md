# SortHeader

Specifies whether the first row of the sort range contains the header information.

## Type

Enumeration

## Values

- "xlNo"
- "xlYes"


## Example

This example specify that the first row contains header information.

```javascript
worksheet.GetRange("A1:C5").SetSort("A1:A5", "xlAscending", "B1:B5", "xlDescending", "C1:C5", "xlAscending", "xlYes", "xlSortColumns");
```
