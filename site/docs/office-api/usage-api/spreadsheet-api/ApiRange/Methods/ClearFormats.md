# ClearFormats

Clears all formatting from the current range.

## Syntax

```javascript
expression.ClearFormats();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Strip all formatting from a cell range while leaving its values untouched in a spreadsheet.

```javascript editor-xlsx
// How do I remove bold, colors, and other styling from cells in a spreadsheet?

// Reset the appearance of selected cells to plain default style without deleting their data in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:A2").SetValue("Example text")
worksheet.GetRange("A1:A2").SetBold(true);
let range = worksheet.GetRange("A1");
range.ClearFormats();
worksheet.GetRange("A3").SetValue("Result is bold format cleared for A1 cell.");
```
