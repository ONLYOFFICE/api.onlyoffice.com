# GetPrintGridlines

Returns the page PrintGridlines property which specifies whether the current sheet gridlines must be printed or not.

## Syntax

```javascript
expression.GetPrintGridlines();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether cell gridlines are set to print on the active sheet in a spreadsheet.

```javascript editor-xlsx
// How do I find out if gridlines will appear on printed pages in a spreadsheet?

// Verify the print-gridlines setting and display the result in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintGridlines(true);
worksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page: " + worksheet.GetPrintGridlines());
```
