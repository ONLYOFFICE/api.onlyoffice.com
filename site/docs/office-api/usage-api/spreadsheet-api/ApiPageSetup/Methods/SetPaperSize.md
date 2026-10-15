# SetPaperSize

Sets the paper size used when the worksheet is printed.

## Syntax

```javascript
expression.SetPaperSize(sPaperSize);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPaperSize | Required | [PaperSize](../../Enumeration/PaperSize.md) |  | The paper size (an xlPaperSize constant name, e.g. "xlPaperA4"). |

## Returns

boolean

## Example

Set the paper size used when printing a worksheet in a spreadsheet.

```javascript editor-xlsx
// How do I switch the print paper size to A4 (or Letter, A3, ...) in a spreadsheet?

// Choose the paper format for printing a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPaperSize("xlPaperA4");
```
