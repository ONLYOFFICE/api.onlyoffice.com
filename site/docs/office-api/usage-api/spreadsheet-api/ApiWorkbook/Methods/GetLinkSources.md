# GetLinkSources

Returns the paths of the other workbooks registered as external links of the current workbook, including links no formula uses any longer.

## Syntax

```javascript
expression.GetLinkSources();
```

`expression` - A variable that represents an [ApiWorkbook](../ApiWorkbook.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string[]

## Example

List the other workbooks the current workbook is linked to.

```javascript editor-xlsx
// How do I find which external workbooks a spreadsheet depends on?

// Write the path of every linked workbook to the sheet.

let workbook = Api.GetActiveWorkbook();
let worksheet = Api.GetActiveSheet();
let sources = workbook.GetLinkSources();
worksheet.GetRange("A1").SetValue("Linked workbooks: " + sources.length);
for (let i = 0; i < sources.length; i++) {
    worksheet.GetRange("A" + (i + 2)).SetValue(sources[i]);
}
```
