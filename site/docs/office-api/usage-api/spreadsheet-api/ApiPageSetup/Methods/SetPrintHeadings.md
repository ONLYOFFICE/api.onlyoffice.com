# SetPrintHeadings

Sets whether row and column headings are printed with the worksheet.

## Syntax

```javascript
expression.SetPrintHeadings(bPrint);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bPrint | Required | boolean |  | Specifies whether the row and column headings are printed. |

## Returns

boolean

## Example

Print row and column headings together with the worksheet content in a spreadsheet.

```javascript editor-xlsx
// How do I include row numbers and column letters on the printout in a spreadsheet?

// Show the row and column headings when printing a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintHeadings(true);
```
