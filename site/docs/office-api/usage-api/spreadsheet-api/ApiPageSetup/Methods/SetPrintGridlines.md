# SetPrintGridlines

Sets whether cell gridlines are printed with the worksheet.

## Syntax

```javascript
expression.SetPrintGridlines(bPrint);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bPrint | Required | boolean |  | Specifies whether the cell gridlines are printed. |

## Returns

boolean

## Example

Print cell gridlines together with the worksheet content in a spreadsheet.

```javascript editor-xlsx
// How do I make gridlines appear on the printout in a spreadsheet?

// Show the cell gridlines when printing a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintGridlines(true);
```
