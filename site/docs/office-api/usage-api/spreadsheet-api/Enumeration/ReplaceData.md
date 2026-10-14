# ReplaceData

Properties to make search and replace.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| LookAt | [XlLookAt](../Enumeration/XlLookAt.md) | Specifies whether the whole search text or any part of the search text is matched. |
| MatchCase | boolean | Case sensitive or not. The default value is "false". |
| ReplaceAll | boolean | Specifies if all the found data will be replaced or not. The default value is "true". |
| Replacement | string | The replacement string. |
| SearchDirection | [XlSearchDirection](../Enumeration/XlSearchDirection.md) | Range search direction - next match or previous match. |
| SearchOrder | [XlSearchOrder](../Enumeration/XlSearchOrder.md) | Range search order - by rows or by columns. |
| What | string \| RegExp \| undefined | The data to search for, or a regular expression to match the cell text. When a RegExp is passed, the MatchCase and Wildcards parameters are ignored (control case sensitivity with the "i" flag instead). Add the "g" flag to replace every occurrence inside a cell - without it only the first occurrence is replaced, while a string always replaces every occurrence. |
| Wildcards | boolean | Specifies whether to interpret the search text as a wildcard pattern: "*" matches any character sequence, "?" matches any single character, use "~*" / "~?" to find the literal "*" / "?" characters. The default value is "false". |
