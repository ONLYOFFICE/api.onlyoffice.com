# GetIndex

Returns a sheet index.

## Syntax

```javascript
expression.GetIndex();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Find the position of a sheet among all sheets in a spreadsheet.

```javascript editor-xlsx
// How do I get the tab number of the active sheet in a spreadsheet?

// Identify the sheet order index and display it in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let leftMargin = worksheet.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + leftMargin + " mm");
```
