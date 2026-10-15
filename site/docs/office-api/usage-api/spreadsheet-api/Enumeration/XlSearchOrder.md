# XlSearchOrder

Range search order - by rows or by columns.

## Type

Enumeration

## Values

- "xlByRows"
- "xlByColumns"

## Example

Search a range column by column.

```javascript editor-xlsx
// How do I search for text in a specific order?

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
