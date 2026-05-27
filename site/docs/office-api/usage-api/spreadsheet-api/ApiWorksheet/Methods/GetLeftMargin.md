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

Read the left page margin of the active sheet in a spreadsheet.

```javascript editor-xlsx
// How do I find out the left margin width of a sheet in a spreadsheet?

// Retrieve the left margin value in millimeters and show it in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let leftMargin = worksheet.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + leftMargin + " mm");
```
