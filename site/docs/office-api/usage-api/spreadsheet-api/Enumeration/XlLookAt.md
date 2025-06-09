# XlLookAt

Specifies whether the whole search text or any part of the search text is matched.

## Type

Enumeration

## Values

- "xlWhole"
- "xlPart"


## Example

This example specify that the whole text match will be searched in the range.

```javascript editor-xlsx
let searchRange = range.Find( { What: "200", After: oWorksheet.GetRange("B1"), LookIn: "xlValues", LookAt: "xlWhole",	SearchOrder: "xlByColumns", SearchDirection: "xlNext", MatchCase: true } );
```
