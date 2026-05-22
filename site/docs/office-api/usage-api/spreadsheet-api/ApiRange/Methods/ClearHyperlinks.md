# ClearHyperlinks

Clears all hyperlinks from the current range.

## Syntax

```javascript
expression.ClearHyperlinks();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Remove all hyperlinks from a cell range while keeping the displayed text in a spreadsheet.

```javascript editor-xlsx
// How do I detach links from cells without deleting their text in a spreadsheet?

// Turn linked cells back into plain text by stripping away their URLs in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:B1").SetValue("http://example.com");
let range = worksheet.GetRange("A1");
range.ClearHyperlinks();
worksheet.GetRange("A2").SetValue("Result is hyperlinks cleared for A1 cell.");
```
