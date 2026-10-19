# SearchData

Properties to make search.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| After | [ApiRange](../ApiRange/ApiRange.md) | The cell after which you want the search to begin. If this argument is not specified, the search starts after the cell in the upper-left corner of the range. |
| LookAt | [XlLookAt](../Enumeration/XlLookAt.md) | Specifies whether the whole search text or any part of the search text is matched. |
| LookIn | [XlFindLookIn](../Enumeration/XlFindLookIn.md) | Search data type (formulas or values). |
| MatchCase | boolean | Case sensitive or not. The default value is "false". |
| SearchDirection | [XlSearchDirection](../Enumeration/XlSearchDirection.md) | Range search direction - next match or previous match. |
| SearchOrder | [XlSearchOrder](../Enumeration/XlSearchOrder.md) | Range search order - by rows or by columns. |
| What | string \| RegExp \| undefined | The data to search for, or a regular expression to match the cell text. When a RegExp is passed, the MatchCase and Wildcards parameters are ignored (control case sensitivity with the "i" flag instead). |
| Wildcards | boolean | Specifies whether to interpret the search text as a wildcard pattern: "*" matches any character sequence, "?" matches any single character, use "~*" / "~?" to find the literal "*" / "?" characters. The default value is "false". |

## Example

Find text in a range by specifying the search data.

```javascript editor-xlsx
// How do I search for text using search data?

// Find a text from a range specifying data.

let searchRange = range.Find({
	What: "200",
	After: oWorksheet.GetRange("B1"),
	LookIn: "xlValues",
	LookAt: "xlWhole",
	SearchOrder: "xlByColumns",
	SearchDirection: "xlNext",
	MatchCase: true
});
let wildcardRange = range.Find({
	What: "2?0",
	LookIn: "xlValues",
	LookAt: "xlWhole",
	Wildcards: true
});
let regExpRange = range.Find({
	What: /\d{3}/,
	LookIn: "xlValues",
	LookAt: "xlPart"
});
```
