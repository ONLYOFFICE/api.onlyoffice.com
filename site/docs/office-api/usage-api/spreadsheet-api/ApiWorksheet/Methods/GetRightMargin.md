# GetRightMargin

Returns the right margin of the sheet.

## Syntax

```javascript
expression.GetRightMargin();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get the right margin of the sheet in a spreadsheet.

```javascript editor-xlsx
// How to get margin of the sheet's right side in a spreadsheet.

// Get the size of the right margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let rightMargin = worksheet.GetRightMargin();
worksheet.GetRange("A1").SetValue("Right margin: " + rightMargin + " mm");
```
