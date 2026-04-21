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

Get the bottom margin of the sheet in a spreadsheet.

```javascript editor-xlsx
// How to get margin of the bottom in a spreadsheet.

// Get the size of the bottom margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let bottomMargin = worksheet.GetBottomMargin();
worksheet.GetRange("A1").SetValue("Bottom margin: " + bottomMargin + " mm");
```
