# Clear

Clears the current range.

## Syntax

```javascript
expression.Clear();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Erase all values and formatting from a cell range in a spreadsheet.

```javascript editor-xlsx
// How do I completely wipe a range of cells clean in a spreadsheet?

// Reset a group of cells to a blank state by removing both their data and styling in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:B1");
range.SetValue("1");
range.Clear();
worksheet.GetRange("A2").SetValue("The range A1:B1 was just cleared.");
```
