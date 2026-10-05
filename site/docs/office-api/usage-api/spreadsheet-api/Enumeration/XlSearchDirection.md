# XlSearchDirection

Range search direction - next match or previous match.

## Type

Enumeration

## Values

- "xlNext"
- "xlPrevious"

## Example

Search a range for the next matching value.

```javascript editor-xlsx
// How do I search for text in the "xlNext" direction?

// Find a text from a range specifying search direction.

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
