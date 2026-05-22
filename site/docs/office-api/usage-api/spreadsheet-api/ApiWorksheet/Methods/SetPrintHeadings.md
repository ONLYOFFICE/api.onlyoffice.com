# SetPrintHeadings

Specifies whether the current sheet row/column headers must be printed or not.

## Syntax

```javascript
expression.SetPrintHeadings(bPrint);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bPrint | Required | boolean |  | Specifies whether the current sheet row/column headers must be printed or not. |

## Returns

boolean

## Example

Add row numbers and column letters to printed output in a spreadsheet.

```javascript editor-xlsx
// How do I include row and column identifiers on my printed pages in a spreadsheet?

// Display the grid labels (A, B, C and 1, 2, 3) when printing your spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintHeadings(true);
worksheet.GetRange("A1").SetValue("Row and column headings will be printed with this page: " + worksheet.GetPrintHeadings());
```
