# SetPrintGridlines

Specifies whether the current sheet gridlines must be printed or not.

## Syntax

```javascript
expression.SetPrintGridlines(bPrint);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bPrint | Required | boolean |  | Defines if cell gridlines are printed on this page or not. |

## Returns

boolean

## Example

Enable or disable gridlines on printed pages in a spreadsheet.

```javascript editor-xlsx
// How do I include or exclude the grid pattern when printing my spreadsheet?

// Specify whether printed output shows the cell boundary lines in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintGridlines(true);
worksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page: " + worksheet.GetPrintGridlines());
```
