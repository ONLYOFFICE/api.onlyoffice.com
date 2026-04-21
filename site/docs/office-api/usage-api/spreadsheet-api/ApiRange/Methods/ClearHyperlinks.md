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

Clear all the hyperlinks in the range in a spreadsheet.

```javascript editor-xlsx
// How to clear hyperlinks for a range in a spreadsheet.

// Get a range, clear hyperlinks and show the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:B1").SetValue("http://example.com");
let range = worksheet.GetRange("A1");
range.ClearHyperlinks();
worksheet.GetRange("A2").SetValue("Result is hyperlinks cleared for A1 cell.");
```
