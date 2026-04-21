# GetActiveWorkbook

Returns an object that represents the active workbook.

## Syntax

```javascript
expression.GetActiveWorkbook();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiWorkbook](../../ApiWorkbook/ApiWorkbook.md)

## Example

Get an object that represents the active workbook in a spreadsheet.

```javascript editor-xlsx
// How do I get active workbook in a spreadsheet?

// Get active workbook and display the result in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();
const cell = worksheet.GetActiveCell();
const workbookName = workbook.GetName();
cell.SetValue(workbookName);
```
