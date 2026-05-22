# GetFreezePanes

Returns the freeze panes from the current worksheet.

## Syntax

```javascript
expression.GetFreezePanes();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFreezePanes](../../ApiFreezePanes/ApiFreezePanes.md)

## Example

Read the frozen pane area and display its address on the sheet in a spreadsheet.

```javascript editor-xlsx
// How do I find out which rows or columns are frozen in a spreadsheet?

// Check where the freeze boundary is and write its location to a cell in a spreadsheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range.GetAddress());
```
