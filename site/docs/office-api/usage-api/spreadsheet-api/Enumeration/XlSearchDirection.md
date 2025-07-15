# XlSearchDirection

Range search direction - next match or previous match.

## Type

Enumeration

## Values

- "xlNext"
- "xlPrevious"


## Example

This example specify that the whole text match will be searched in the range.

```javascript editor-xlsx
// How to search a text indicating search direction as "xlNext".

// Find a text from a range specifying search direction.

let searchRange = range.Find( { What: "200", After: oWorksheet.GetRange("B1"), LookIn: "xlValues", LookAt: "xlWhole",	SearchOrder: "xlByColumns", SearchDirection: "xlNext", MatchCase: true } );
```
