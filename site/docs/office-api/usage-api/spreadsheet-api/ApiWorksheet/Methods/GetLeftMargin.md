# GetLeftMargin

Returns the left margin of the sheet.

## Syntax

```javascript
expression.GetLeftMargin();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get the left margin of the sheet in a spreadsheet.

```javascript editor-xlsx
// How to get margin of the sheet's left side in a spreadsheet.

// Get the size of the left margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let leftMargin = worksheet.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + leftMargin + " mm");
```
