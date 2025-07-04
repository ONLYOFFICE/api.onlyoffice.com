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

This example shows how to get the state of sheet visibility.

```javascript editor-xlsx
// How to get visibility of the worksheet.

// Find out whether a sheet is visible or not and display it in the sheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetVisible(true);
let isVisible = worksheet.GetVisible();
worksheet.GetRange("A1").SetValue("Visible: ");
worksheet.GetRange("B1").SetValue(isVisible);
```
