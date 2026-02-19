# XlSearchOrder

Range search order - by rows or by columns.

## Type

Enumeration

## Values

- "xlByRows"
- "xlByColumns"


## Example

This example specify that the whole text match will be searched in the range.

```javascript editor-xlsx
// How to search a text indicating search order.

// Find a text from a range with column wise search order.

let searchRange = range.Find({
	What: "200",
	After: oWorksheet.GetRange("B1"),
	LookIn: "xlValues",
	LookAt: "xlWhole",
	SearchOrder: "xlByColumns",
	SearchDirection: "xlNext",
	MatchCase: true
});

```
