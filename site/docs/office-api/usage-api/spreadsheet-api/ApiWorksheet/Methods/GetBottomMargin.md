# GetBottomMargin

Returns the bottom margin of the sheet.

## Syntax

```javascript
expression.GetBottomMargin();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Read the bottom page margin of a worksheet in a spreadsheet.

```javascript editor-xlsx
// How do I find out the bottom margin size of a sheet in a spreadsheet?

// Check how much space is reserved at the bottom of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let bottomMargin = worksheet.GetBottomMargin();
worksheet.GetRange("A1").SetValue("Bottom margin: " + bottomMargin + " mm");
```
