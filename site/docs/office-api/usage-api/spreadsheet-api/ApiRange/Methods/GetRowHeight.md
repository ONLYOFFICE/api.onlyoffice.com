# GetRowHeight

Returns the row height value.

## Syntax

```javascript
expression.GetRowHeight();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[pt](../../Enumeration/pt.md)

## Example

Get the row height value in a spreadsheet.

```javascript editor-xlsx
// How to get a cell row height.

// Get a range and display its row height in the worksheet.

let worksheet = Api.GetActiveSheet();
let height = worksheet.GetRange("A1").GetRowHeight();
worksheet.GetRange("A1").SetValue("Height: ");
worksheet.GetRange("B1").SetValue(height);
```
