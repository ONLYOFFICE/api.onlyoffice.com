# GetVisible

Returns the state of sheet visibility.

## Syntax

```javascript
expression.GetVisible();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check if a sheet is hidden or visible in a spreadsheet.

```javascript editor-xlsx
// Determine the display status of a worksheet for visibility control in a spreadsheet?

// Display the visibility state in a cell to confirm sheet access in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetVisible(true);
let isVisible = worksheet.GetVisible();
worksheet.GetRange("A1").SetValue("Visible: ");
worksheet.GetRange("B1").SetValue(isVisible);
```
