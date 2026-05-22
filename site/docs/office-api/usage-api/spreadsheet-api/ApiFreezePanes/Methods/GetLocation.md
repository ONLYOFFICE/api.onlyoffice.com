# GetLocation

Returns a range that describes the frozen cells in the active worksheet view.

## Syntax

```javascript
expression.GetLocation();
```

`expression` - A variable that represents a [ApiFreezePanes](../ApiFreezePanes.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Read the address of the currently frozen area and display it in a cell in a spreadsheet.

```javascript editor-xlsx
// How do I find out which rows or columns are currently locked in place in a spreadsheet?

// Retrieve the cell reference of the frozen region to confirm what is pinned in a spreadsheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range.GetAddress());
```
